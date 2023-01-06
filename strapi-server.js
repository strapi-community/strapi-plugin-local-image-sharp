'use strict'

const { decode } = require('ufo')
const getEtag = require('etag')
const Router = require('@koa/router')
const qs = require('qs')
const { createIPX } = require('ipx')

function createMiddleware(ipx) {
  return async function ipxMiddleware(ctx, next) {
    const [url, query] = ctx.req.url.replace('/uploads', '').split('?')
    const [firstSegment = '', ...idSegments] = url.substr(1 /* leading slash */).split('/')
    const allowedTypes = ['JPEG', 'PNG', 'GIF', 'SVG', 'TIFF', 'ICO', 'DVU', 'JPG', 'WEBP', 'AVIF'];
    let id
    let modifiers
    
    if (!idSegments.length && firstSegment) {
      id = firstSegment
      modifiers = qs.parse(query)
    } else {
      id = decode(idSegments.join('/')) // decode is a shortend version of decodeURIComponent
      modifiers = Object.create(null)
      if (firstSegment !== '_') {
        for (const p of firstSegment.split(',')) {
          const [key, value = ''] = p.split('_')
          modifiers[key] = decode(value)
        }
      }
    }

    if (!id ||
        !Object.keys(modifiers).length ||
        !allowedTypes.includes(id.split('.').pop().toUpperCase())) {
      await next()
      return
    }

    // Create request
    const img = ipx(id, modifiers, ctx.req.options)

    // Get image meta from source
    try {
      const src = await img.src()

      // Caching headers
      if (src.mtime) {
        if (ctx.req.headers['if-modified-since']) {
          if (new Date(ctx.req.headers['if-modified-since']) >= src.mtime) {
            ctx.status = 304
            return
          }
        }
        ctx.set('Last-Modified', `${+src.mtime}`)
      }
      if (src.maxAge !== undefined) {
        ctx.set('Cache-Control', `max-age=${+src.maxAge}, public, s-maxage=${+src.maxAge}`)
      }

      // Get converted image
      const { data, format } = await img.data()

      // ETag
      const etag = getEtag(data)
      ctx.set('ETag', etag)
      if (etag && ctx.req.headers['if-none-match'] === etag) {
        ctx.status = 304
        return
      }

      // Mime
      if (format) {
        ctx.set('Content-Type', `image/${format}`)
      }

      ctx.body = data
    } catch (error) {
      const statusCode = parseInt(error.statusCode, 10) || 500
      const statusMessage = error.message ? `IPX Error (${error.message})` : `IPX Error (${statusCode})`
      strapi.log.debug(statusMessage)
      console.error(error)

      ctx.status = statusCode
    }
  }
}

const plugin = {
  register({ strapi }) {
    const ipx = createIPX({
      dir: `${strapi.dirs?.static?.public ?? strapi.dirs?.public}/uploads`,
    })
    const router = new Router()
    const middeware = createMiddleware(ipx)

    router.get('/uploads/(.*)', middeware)

    strapi.server.use(router.routes())
  },
}

module.exports = plugin

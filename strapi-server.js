'use strict';

const { decode } = require('ufo')
const getEtag = require('etag')
const Router = require('@koa/router');
const { createIPX  } = require("ipx");

async function createMiddleware (ipx) {
  return async function ipxMiddleware(ctx) {
    const url = ctx.req.url.replace('/uploads', '').split('?')[0]
    // Parse URL
    const [modifiersStr = '', ...idSegments] = url.substr(1 /* leading slash */).split('/')
    const id = decode(idSegments.join('/'))

    // Validate
    if (!modifiersStr) {
      return
    }
    if (!id || id === '/') {
      return
    }

    // Contruct modifiers
    const modifiers = Object.create(null)

    // Read modifiers from first segment
    if (modifiersStr !== '_') {
      for (const p of modifiersStr.split(',')) {
        const [key, value = ''] = p.split('_')
        modifiers[key] = decode(value)
      }
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
      const statusMessage = error.statusMessage ? error.statusMessage : `IPX Error (${statusCode})`
      strapi.log.debug(statusMessage)
    
      ctx.status = statusCode
    }
  }
}

const plugin = {
  bootstrap({ strapi }) {
    const ipx = createIPX({
      dir: `${strapi.dirs.dist.public}/uploads`,
    })
    const router = new Router();
    const middeware = createMiddleware(ipx)
  
    router.get('/uploads/(.*)', middeware)
  
    strapi.server.router.use(router.routes());
  }
}

module.exports = plugin;
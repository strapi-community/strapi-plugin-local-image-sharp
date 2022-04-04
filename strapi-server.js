'use strict';

const Router = require('@koa/router');
const { createIPX, handleRequest  } = require("ipx");

const plugin = {
  bootstrap({ strapi }) {
    const ipx = createIPX({
      dir: `${strapi.dirs.dist.public}/uploads`,
    })
    const router = new Router();
  
    router.get('/uploads/(.*)', async (ctx) => {
      try {
        // eslint-disable-next-line prefer-destructuring
        ctx.req.url = ctx.req.url.replace('/uploads', '').split('?')[0]
  
        const img = await handleRequest(ctx.req, ipx)
  
        if (img.statusCode === 200 || img.statusCode === 304) {
          for (const header in img.headers) {
            if (Object.prototype.hasOwnProperty.call(img.headers, header)) {
              ctx.set(header, img.headers[header])
            }
          }
  
          ctx.status = img.statusCode
          ctx.body = img.body
        }
      } catch(error) {
        const statusCode = parseInt(error.statusCode, 10) || 500
        const statusMessage = error.statusMessage ? error.statusMessage : `IPX Error (${statusCode})`
        strapi.log.error(statusMessage)
  
        ctx.status = statusCode
      }
    })
  
    strapi.server.router.use(router.routes());
  }
}

module.exports = plugin;
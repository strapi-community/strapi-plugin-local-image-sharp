'use strict';

const { pluginConfigSchema } = require('./schema');

module.exports = {
  config: {
    default: ({ env }) => ({
      cacheDir: env('STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR', ''),
      maxAge: 3600,
      paths: ['/uploads']
    }),
    validator(config) {
      pluginConfigSchema.validateSync(config);
    },
  }
};

"use strict";

const config = {
  default: ({ env }) => ({
    cacheDir: env("STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR", ""),
    maxAge: 3600,
  }),
  validator() {},
};

module.exports = {
  config,
};

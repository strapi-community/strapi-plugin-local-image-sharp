---
title: Quick Start Guide
---

# Quick Start Guide

Convert any uploaded images with local provider using sharp modifier.
No extra configuration needed, the modifiers will be applied based on the url.

> This is made using [ipx](https://github.com/unjs/ipx)

To install this plugin, run the following command in your Strapi project:

```bash
yarn add strapi-plugin-local-image-sharp
```

## Usage

This plugin works by setting modifiers either the path, or in the query string parameters.

- Original image:  
  `http://localhost:1337/uploads/buffalo_56442f4096.png`
- WebP (Path modifier):  
  `http://localhost:1337/uploads/format_webp/buffalo_56442f4096.png`
- WebP (Query parameters):  
  `http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp`

### Using path modifiers

Change format to `webp` and keep other things same as source:

`http://localhost:1337/uploads/f_webp/buffalo_56442f4096.png`

Keep original format `png` and set width to `200`:

`http://localhost:1337/uploads/w_200/buffalo_56442f4096.png`

You can combine modifiers using a coma, for example:
Resize to `200x200px` using `embed` method and change format to `webp`:

`http://localhost:1337/uploads/embed,f_webp,s_200x200/buffalo_56442f4096.png`

### Using query parameters modifiers

Change format to `webp` and keep other things same as source:

`http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp`

Keep original format `png` and set width to `200`:

`http://localhost:1337/uploads/buffalo_56442f4096.png?width=200`

You can combine modifiers using a coma, for example:
Resize to `200x200px` using `embed` method and change format to `webp`:

`http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp&resize=200x200&embed`

## Configuration

### `cacheDir`

The directory where the generated files will be stored.

> _By default, no value is set, so cache is disabled, meaning that the image will be generated on every request._

You can set the cache directory using `STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR` environment variable. Or you can set it in `config/plugins.js`:

::: code-group

```bash [enviroment variables]
STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR=.image-cache yarn start
# or STRAPI_PLUGIN_LOCAL_IMAGE_SHARP_CACHE_DIR=.image-cache yarn develop
```

```js [config/plugins.js]
"use strict";

module.exports = {
  // ...

  "local-image-sharp": {
    config: {
      cacheDir: ".image-cache",
    },
  },

  // ...
};
```

### `maxAge`

You can set the `Cache-Control` HTTP response header to improve the load performance. It's a good practice cache static resources using HTTP caching. [See more here](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl)

```js [config/plugins.js]
'use strict';

module.exports = {
  // ...

  'local-image-sharp': {
    config: {
      maxAge: 31536000, // which corresponds to 1 year: 60 seconds × 60 minutes × 24 hours × 365 days = 31536000 seconds.
    }
  }

  // ...
}

:::

::: info
When providing a relative path, it will be resolved from the root of your project.
:::

::: tip
Don't forget to add `.image-cache` to your `.gitignore` file.
:::
```

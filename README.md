<div align="center">
<h1>Local Image Sharp</h1>
	
<p style="margin-top: 0;">Dynamically resize, format and optimize images based on url modifiers.</p>
	
<p>
  <a href="https://discord.strapi.io">
    <img src="https://img.shields.io/discord/811989166782021633?color=blue&label=strapi-discord" alt="Strapi Discord">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-local-image-sharp">
    <img src="https://img.shields.io/npm/v/strapi-plugin-local-image-sharp/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-local-image-sharp">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-local-image-sharp" alt="Monthly download on NPM" />
  </a>
</p>
</div>

## Table of Contents <!-- omit in toc -->

- [✨ Features](#-features)
- [🖐 Installation](#-installation)
- [🚚 Usage](#-usage)
- [Contributing](#contributing)
- [License](#license)


## ✨ Features

Convert any uploaded images with local provider using sharp modifier. 
No extra configuration needed, the modifiers will be applied based on the url.

This is made by [ipx](https://github.com/unjs/ipx)

## 🖐 Installation


**Add plugin dependency**
```bash
yarn add strapi-plugin-local-image-sharp
```

## 🚚 Usage

### Examples

This plugin works by setting modifiers either the path, or in the query string parameters.

Get original image:

`http://localhost:1337/uploads/buffalo.png`

#### Using path modifiers

Change format to `webp` and keep other things same as source:

`http://localhost:1337/uploads/f_webp/buffalo_56442f4096.png`

Keep original format `png` and set width to `200`:

`http://localhost:1337/uploads/w_200/buffalo_56442f4096.png`

You can combine modifiers using a coma, for example:
Resize to `200x200px` using `embed` method and change format to `webp`:

`http://localhost:1337/uploads/embed,f_webp,s_200x200/buffalo_56442f4096.png`

#### Using query parameters modifiers

Change format to `webp` and keep other things same as source:

`http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp`

Keep original format `png` and set width to `200`:

`http://localhost:1337/uploads/buffalo_56442f4096.png?width=200`

You can combine modifiers using a coma, for example:
Resize to `200x200px` using `embed` method and change format to `webp`:

`http://localhost:1337/uploads/buffalo_56442f4096.png?format=webp&resize=200x200&embed`

### Modifiers

| Property        | Docs                                                            | Example                                                     | Comments                                                                                                                                                          |
| --------------- | :-------------------------------------------------------------- | :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width / w       | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | `http://localhost:1337/uploads/width_200/buffalo.png`               |
| height / h      | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | `http://localhost:1337/uploads/height_200/buffalo.png`              |
| resize / s      | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | `http://localhost:1337/uploads/s_200x200/buffalo.png`               |
| fit             | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | `http://localhost:1337/uploads/s_200x200,fit_outside/buffalo.png`   | Sets `fit` option for `resize`.
| position / pos  | [Docs](https://sharp.pixelplumbing.com/api-resize#resize)       | `http://localhost:1337/uploads/s_200x200,pos_top/buffalo.png`       | Sets `position` option for `resize`.
| trim            | [Docs](https://sharp.pixelplumbing.com/api-resize#trim)         | `http://localhost:1337/uploads/trim_100/buffalo.png`                |
| format          | [Docs](https://sharp.pixelplumbing.com/api-output#toformat)     | `http://localhost:1337/uploads/format_webp/buffalo.png`             | Supported format: `jpg`, `jpeg`, `png`, `webp`, `avif`, `gif`, `heif`                                                                                             |
| quality / q     | \_                                                              | `http://localhost:1337/uploads/quality_50/buffalo.png`              | Accepted values: 0 to 100                                                                                                                                         |
| rotate          | [Docs](https://sharp.pixelplumbing.com/api-operation#rotate)    | `http://localhost:1337/uploads/rotate_45/buffalo.png`               |
| enlarge         | \_                                                              | `http://localhost:1337/uploads/enlarge,s_2000x2000/buffalo.png`     | Allow the image to be upscaled. By default the returned image will never be larger than the source in any dimension, while preserving the requested aspect ratio. |
| flip            | [Docs](https://sharp.pixelplumbing.com/api-operation#flip)      | `http://localhost:1337/uploads/flip/buffalo.png`                    |
| flop            | [Docs](https://sharp.pixelplumbing.com/api-operation#flop)      | `http://localhost:1337/uploads/flop/buffalo.png`                    |
| sharpen         | [Docs](https://sharp.pixelplumbing.com/api-operation#sharpen)   | `http://localhost:1337/uploads/sharpen_30/buffalo.png`              |
| median          | [Docs](https://sharp.pixelplumbing.com/api-operation#median)    | `http://localhost:1337/uploads/median_10/buffalo.png`               |
| gamma           | [Docs](https://sharp.pixelplumbing.com/api-operation#gamma)     | `http://localhost:1337/uploads/gamma_3/buffalo.png`                 |
| negate          | [Docs](https://sharp.pixelplumbing.com/api-operation#negate)    | `http://localhost:1337/uploads/negate/buffalo.png`                  |
| normalize       | [Docs](https://sharp.pixelplumbing.com/api-operation#normalize) | `http://localhost:1337/uploads/normalize/buffalo.png`               |
| threshold       | [Docs](https://sharp.pixelplumbing.com/api-operation#threshold) | `http://localhost:1337/uploads/threshold_10/buffalo.png`            |
| tint            | [Docs](https://sharp.pixelplumbing.com/api-colour#tint)         | `http://localhost:1337/uploads/tint_1098123/buffalo.png`            |
| grayscale       | [Docs](https://sharp.pixelplumbing.com/api-colour#grayscale)    | `http://localhost:1337/uploads/grayscale/buffalo.png`               |
| animated        | -                                                               | `http://localhost:1337/uploads/animated/buffalo.gif`                | Experimental                                                                                                                                                      |


## Contributing

I/We are actively looking for contributors, maintainers, and others to help shape this package. As this plugins sole purpose within the Strapi community is to be used by other developers and plugin maintainers to get fast responses time.

If interested please feel free to email the lead maintainer Sacha at: sacha@digisquad.io or ping `stf#3254` on Discord.

## License

See the [LICENSE](./LICENSE.md) file for licensing information.
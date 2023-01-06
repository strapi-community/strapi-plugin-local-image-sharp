
# Modifiers 

## `width` / `w`

Resize the image to the specified width in pixels. The height is calculated with the same aspect ratio.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/width_200/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?width=200`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-resize#resize](https://sharp.pixelplumbing.com/api-resize#resize)

## `height` / `h`

Resize the image to the specified height in pixels. The width is calculated with the same aspect ratio.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/height_200/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?height=200`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-resize#resize](https://sharp.pixelplumbing.com/api-resize#resize)

## `resize` / `s`

Resize the image to the specified width and height in pixels. The aspect ratio is not preserved.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/s_200x200/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?resize=200x200`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-resize#resize](https://sharp.pixelplumbing.com/api-resize#resize)

## `fit`

Resize the image to the specified width and height in pixels. The aspect ratio is preserved.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/s_200x200,fit_outside/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?resize=200x200&fit=outside`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-resize#resize](https://sharp.pixelplumbing.com/api-resize#resize)

## `position` / `pos`

Sets `position` option for `resize`. Only works with `fit` and `resize` modifiers.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/s_200x200,pos_top/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?resize=200x200&position=top`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-resize#resize](https://sharp.pixelplumbing.com/api-resize#resize)

## `trim`

Trim the image to remove any border that matches the specified background color.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/trim_ffffff/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?trim=ffffff`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#trim](https://sharp.pixelplumbing.com/api-operation#trim)

## `format` / `f`

Convert the image to the specified format. The format must be one of the following: `jpeg`, `jpg`, `png`, `webp`, `tiff`, `raw`, `gif`, `svg`, `heif`, `heic`, `avif`.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/format_jpg/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?format=jpg`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-output#toformat](https://sharp.pixelplumbing.com/api-output#toformat)

## `quality` / `q`

Set the quality of the output image. This is only applicable to JPEG and WebP images.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/quality_50/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?quality=50`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-output#jpeg](https://sharp.pixelplumbing.com/api-output#jpeg)

## `rotate` / `r`

Rotate the image by the specified number of degrees.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/rotate_90/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?rotate=90`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#rotate](https://sharp.pixelplumbing.com/api-operation#rotate)

## `enlarge`

Enlarge the output image to be at least as wide and as high as the specified width and height in pixels. The aspect ratio is not preserved.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/enlarge_200x200/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?enlarge=200x200`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-resize#resize](https://sharp.pixelplumbing.com/api-resize#resize)

## `flip`

Flip the image about the vertical Y axis. This is equivalent to a horizontal flip if the image is displayed in the correct orientation.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/flip/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?flip`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#flip](https://sharp.pixelplumbing.com/api-operation#flip)

## `flop`

Flip the image about the horizontal X axis. This is equivalent to a horizontal flip.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/flop/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?flop`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#flop](https://sharp.pixelplumbing.com/api-operation#flop)

## `sharpen`

Sharpen the image. This can be used to increase the perceived sharpness of an image.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/sharpen/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?sharpen`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#sharpen](https://sharp.pixelplumbing.com/api-operation#sharpen)

## `median`

Apply a median filter to the image. This can be used to reduce noise in an image.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/median/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?median`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#median](https://sharp.pixelplumbing.com/api-operation#median)

## `gamma`

Apply gamma correction to the image. This can be used to adjust the overall brightness of an image.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/gamma_1.5/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?gamma=1.5`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#gamma](https://sharp.pixelplumbing.com/api-operation#gamma)

## `negate`

Negate the image. This can be used to invert the colors of an image.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/negate/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?negate`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#negate](https://sharp.pixelplumbing.com/api-operation#negate)

## `normalize`

Normalize the image. This can be used to improve the contrast in an image.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/normalize/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?normalize`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#normalize](https://sharp.pixelplumbing.com/api-operation#normalize)

## `threshold`

Threshold the image. This can be used to convert an image to black and white.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/threshold_128/buffalo.png`

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?threshold=128`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#threshold](https://sharp.pixelplumbing.com/api-operation#threshold)

## `grayscale`

Convert the image to grayscale. This can be used to remove color from an image.

**Example (Path modifier)**:  
`http://localhost:1337/uploads/grayscale/buffalo.png` 

**Example (Query parameter)**:  
`http://localhost:1337/uploads/buffalo.png?grayscale`

**Sharp documentation**:  
[https://sharp.pixelplumbing.com/api-operation#greyscale](https://sharp.pixelplumbing.com/api-operation#greyscale)

## `animated`

**experimental**
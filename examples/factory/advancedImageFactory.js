class Image {}

class JPGImage extends Image {}

class PNGImage extends Image {}

class GIFImage extends Image {}

function createImage(type) {
  const supportedImageTypes = {
    jpg: JPGImage,
    png: PNGImage,
    gif: GIFImage
  }

  return new (supportedImageTypes[type.toLowerCase()] || Image)()
}

module.exports = {
    Image,
    createImage,
    JPGImage,
    PNGImage,
    GIFImage
}

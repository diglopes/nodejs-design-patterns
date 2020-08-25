const {Image, createImage, JPGImage, PNGImage, GIFImage} = require("../advancedImageFactory")

describe('Advanced Image Factory', () => {
    it('should create an instance of JPGImage given the type is jpg', () => {
        const instance = createImage('jpg')
        expect(instance).toBeInstanceOf(JPGImage)
    })

    it('should create an instance of PNGImage given the type is png', () => {
        const instance = createImage('png')
        expect(instance).toBeInstanceOf(PNGImage)
    })

    it('should create an instance of GIFImage given the type is gif', () => {
        const instance = createImage('gif')
        expect(instance).toBeInstanceOf(GIFImage)
    })

    it('should create an instance of Image given the type is unsupported', () => {
        const instance = createImage('bmp')
        expect(instance).toBeInstanceOf(Image)
    })
});
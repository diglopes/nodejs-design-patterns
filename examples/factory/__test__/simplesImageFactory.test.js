const {Image, createImage} = require("../simpleImageFactory")

describe('Simple Image Factory', () => {
    it('should create a new instance of Image', () => {
        const imageInstance = createImage('jpg')
        expect(imageInstance).toBeInstanceOf(Image)
    });
});
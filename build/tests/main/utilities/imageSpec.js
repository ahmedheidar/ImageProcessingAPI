"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("../../../main/utilities/image"));
var validImage = { name: "sky", width: 500, height: 600,
    dir: "F:\\PROGRAMMING\\ImageProcessingAPI\\src\\main\\resources\\cache\\sky.jpg" };
var inValidImage = { name: "sky", width: "abc", height: 600,
    dir: "F:\\PROGRAMMING\\ImageProcessingAPI\\src\\main\\resources\\cache\\sky.jpg" };
it('This test should resize an image', function () {
    expect(image_1.default.resizeImage(validImage.name, validImage.width, validImage.height, validImage.dir)).toBeTruthy();
});
it('This test should not allow resizing an image', function () {
    expect(image_1.default.resizeImage(inValidImage.name, parseInt(inValidImage.width), (inValidImage.height), inValidImage.dir)).toBeFalse;
});

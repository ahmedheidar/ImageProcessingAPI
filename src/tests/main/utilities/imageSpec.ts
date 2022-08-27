import { symlink } from "fs"
import util from "../../../main/utilities/image"

const validImage = {name:"sky", width:500, height:600, 
dir:"F:\\PROGRAMMING\\ImageProcessingAPI\\src\\main\\resources\\cache\\sky.jpg"};

const inValidImage = {name:"sky", width:"abc", height:600, 
dir:"F:\\PROGRAMMING\\ImageProcessingAPI\\src\\main\\resources\\cache\\sky.jpg"};

it ('This test should resize an image', () => {
    expect(util.resizeImage(validImage.name,validImage.width,validImage.height,validImage.dir)).toBeTruthy();
});

it ('This test should not allow resizing an image', () => {
    expect(util.resizeImage(inValidImage.name,parseInt(inValidImage.width),(inValidImage.height),inValidImage.dir)).toBeFalse;
});
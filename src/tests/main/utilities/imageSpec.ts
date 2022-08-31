import util from "../../../main/utilities/image";
import path from "path";

const dirname = path.dirname(__dirname);
const dir = path.join(dirname, "resources", "cache", "sky" + ".jpg");
const validImage = { name: "sky", width: 500, height: 600, dir };

const inValidImage = { name: "sky", width: "abc", height: 600, dir };

it("This test should resize an image", () => {
    expect(
        util.resizeImage(
            validImage.name,
            validImage.width,
            validImage.height,
            validImage.dir
        )
    ).toBeTruthy();
});

it("This test should not allow resizing an image", () => {
    expect(
        util.resizeImage(
            inValidImage.name,
            parseInt(inValidImage.width),
            inValidImage.height,
            inValidImage.dir
        )
    ).toBeFalse;
});

import { Request } from "express";
import sharp from "sharp";
import path from "path";

const resizeImage = async (
    imageName: string,
    width: number,
    height: number,
    dir: string
) => {
    const dirname = path.dirname(__dirname);
    const imagePath = path.join(
        dirname,
        "resources",
        "static",
        imageName + ".jpg"
    );
    try {
        await sharp(imagePath)
            .resize({
                width: width,
                height: height,
            })
            .toFile(dir);
        return true;
    } catch (error) {
        console.log("HASDHASHCASCHACSAC" + error);
        return false;
    }
};

const imageInfo = (req: Request) => {
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const fileName = `${name}_${width}_${height}`;
    const dirname = path.dirname(__dirname);
    const dir = path.join(dirname, "resources", "cache", fileName + ".jpg");
    return { name, width, height, dir };
};

const pathConcat = (req: Request) => {
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const fileName = `${name}_${width}_${height}`;
    const dirname = path.dirname(__dirname);
    const dir = path.join(dirname, "resources", "cache", fileName + ".jpg");
    return dir;
};

export default {
    pathConcat,
    imageInfo,
    resizeImage,
};

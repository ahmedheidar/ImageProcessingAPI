import { Request } from "express";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const resizeImage = async (
    imageName: string,
    width: number,
    height: number,
    dir: string
): Promise<boolean> => {
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

const imageInfo = (req: Request): any => {
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const fileName = `${name}_${width}_${height}`;
    const dirname = path.dirname(__dirname);
    const dir = path.join(dirname, "resources", "cache", fileName + ".jpg");
    return { name, width, height, dir };
};

const pathConcat = (req: Request): string => {
    const name = req.query.name as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const fileName = `${name}_${width}_${height}`;
    const dirname = path.dirname(__dirname);
    const dir = path.join(dirname, "resources", "cache", fileName + ".jpg");
    return dir;
};

const validatNumbers = (req: Request): boolean => {
    const width = req.query.width as unknown as number;
    const height = req.query.height as unknown as number;
    return isNaN(width) || isNaN(height);
};

const validateImageName = (req: Request): boolean => {
    const dirname = path.dirname(__dirname);
    const imagePath = path.join(
        dirname,
        "resources",
        "static",
        req.query.name + ".jpg"
    );
    return fs.existsSync(imagePath);
};

export default {
    pathConcat,
    imageInfo,
    resizeImage,
    validatNumbers,
    validateImageName,
};

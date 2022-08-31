import express, { Request, Response } from "express";
import fs from "fs";
import util from "../../utilities/image";

const routes = express.Router();

routes.get("/", (req: Request, res: Response): void => {
    if (util.validatNumbers(req)) {
        res.send("Please enter valid width and height");
        return;
    }
    if (!util.validateImageName(req)) {
        res.send("Image does not exsist");
        return;
    }
    const dir = util.pathConcat(req);
    fs.exists(dir, async (exists) => {
        if (exists) {
            console.log(dir + " exists in cache.");
            res.sendFile(dir);
        } else {
            console.log("Image does not exist in cache");
            const image = util.imageInfo(req);
            const resizedImage = await util.resizeImage(
                image.name,
                parseInt(image.width),
                parseInt(image.height),
                image.dir
            );
            if (resizedImage === true) {
                res.sendFile(dir);
            } else {
                res.send("Error in resizing Image!");
            }
        }
    });
});

export default routes;

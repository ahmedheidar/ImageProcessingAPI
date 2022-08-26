import express from "express";
import fs from "fs";
import util from "../../utilities/image";

const routes = express.Router();

routes.get("/", (req, res) => {
    const dir = util.pathConcat(req);
    fs.exists(dir, async (exists) => {
        if (exists) {
            console.log(dir + " exists in cache.");
            res.sendFile(dir);
        } else {
            console.log("Image doesnt exist in cache");
            const image = util.imageInfo(req);
            await util.resizeImage(
                image.name,
                parseInt(image.width),
                parseInt(image.height),
                image.dir
            );
            res.sendFile(image.dir);
        }
    });
});

export default routes;

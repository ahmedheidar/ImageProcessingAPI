import express, { Request, Response } from "express";
import imageRoute from "./routes/image/resizeRoute";

const app = express();
const port = 5000;

app.use("/image", imageRoute);

app.get("/api", (req: Request, res: Response): void => {
    res.send("Hello").status(200);
});

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});

export default {
    app
};

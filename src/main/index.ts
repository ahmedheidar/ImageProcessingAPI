import express from "express";
import imageRoute from "./routes/image/resizeRoute";

const app = express();
const port = 5000;

app.use("/image", imageRoute);

app.get('/api',(req,res)=>{
    res.send("Hello").status(200);
})

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});


export default{
    app
}
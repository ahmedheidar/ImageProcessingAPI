import express from "express";
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("image route");
});

export default routes;

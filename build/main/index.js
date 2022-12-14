"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeRoute_1 = __importDefault(require("./routes/image/resizeRoute"));
var app = (0, express_1.default)();
var port = 5000;
app.use("/image", resizeRoute_1.default);
app.get("/api", function (req, res) {
    res.send("Hello").status(200);
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var resizeRoute_1 = __importDefault(require("./routes/image/resizeRoute"));
var app = (0, express_1.default)();
var port = 5000;
app.use("/image", resizeRoute_1.default);
app.use(express_1.default.static('resources'));
app.get("/", function (req, res) {
    if (fs_1.default.existsSync('test.txt')) {
        res.send("ASDASD");
    }
    else {
        res.send("112@!");
    }
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});

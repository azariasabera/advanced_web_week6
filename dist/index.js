"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/hello', (req, res) => {
    let message;
    message = { text: "Hello world" };
    // could have just used const message = {text: string = "Hello, world"}
    res.send(message.text);
});
app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
});

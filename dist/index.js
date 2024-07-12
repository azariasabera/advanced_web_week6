"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
let vehicles = [];
app.use(express_1.default.json()); // middleware to parse JSON
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/hello', (req, res) => {
    let message;
    message = { text: "Hello world" };
    // could have just used const message = {text: string = "Hello, world"}
    res.send(message.text);
});
app.post('/vehicle/add', (req, res) => {
    try {
        const newVehicle = {
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            power: req.body.power,
            bodyType: req.body.bodyType,
            wheelCount: req.body.wheelCount,
            draft: req.body.draft,
            wingspan: req.body.wingspan
        };
        console.log(newVehicle);
        vehicles.push(newVehicle);
        res.status(201).send("Vehicle added");
    }
    catch (error) {
        res.status(400).send(`Invalid vehicle object! ${error}`);
    }
    ;
});
app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
});

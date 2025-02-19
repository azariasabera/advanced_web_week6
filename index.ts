import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port: number = 3000;

type msg = {
    text: string
}

type vehicle = {
    model: string,
    color: string,
    year: number,
    power: number,
    bodyType?: string,
    wheelCount?: number,
    draft?: number,
    wingspan?: number
}

let vehicles: vehicle[] = [];

app.use(express.json()); // middleware to parse JSON

app.get('/', (req: Request, res: Response) => {
    res.send('Home Page');
    });

app.get('/hello', (req: Request, res: Response) => {
    let message: msg;
    message = {text: "Hello world"};
    // could have just used const message = {text: string = "Hello, world"}
    res.send(message.text)
})

app.post('/vehicle/add', (req: Request, res: Response) => {
    try {
        const newVehicle: vehicle = {
            model: req.body.model,
            color: req.body.color,
            year: req.body.year,
            power: req.body.power,
            bodyType: req.body.bodyType,
            wheelCount: req.body.wheelCount,
            draft: req.body.draft,
            wingspan: req.body.wingspan
        }
        console.log(newVehicle)
        vehicles.push(newVehicle);
        res.status(201).send("Vehicle added"); 
    }
    catch(error) {
        res.status(400).send(`Invalid vehicle object! ${error}`)
    };
})

app.get('/vehicle/search/:model', (req: Request, res: Response) => {
    const model: string = req.params.model;
    let vehicle = vehicles.find(vehicle => vehicle.model === model);
    if (vehicle) {
        res.json(vehicle);
    }
    else {
        let message: msg;
        message = {text: `Model ${model} not found!`};
        res.json(message);
    }
});

app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
    });
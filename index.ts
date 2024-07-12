import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port: number = 3000;

type msg = {
    text: string
}

app.get('/', (req: Request, res: Response) => {
    res.send('Home Page');
    });

app.get('/hello', (req: Request, res: Response) => {
    let message: msg;
    message = {text: "Hello world"};
    // could have just used const message = {text: string = "Hello, world"}
    res.send(message.text)
})


app.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
    });
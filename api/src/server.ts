import express, { Request, Response } from "express"
import bodyParser from "body-parser";
import cors from 'cors'

import userRoutes from "./handlers/users"

const app: express.Application = express();
const port = 3000;

const corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send("Hello, world!")
});

userRoutes(app)

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
});

export default app
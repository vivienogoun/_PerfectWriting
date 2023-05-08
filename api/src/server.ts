import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import multer from "multer"
import sharp from "sharp"
import tf from "@tensorflow/tfjs-node"

import userRoutes from "./handlers/users"

// import loadModel from "./services/loadModel"

const app: express.Application = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

// Configuration de Multer pour télécharger les fichiers
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Chargement du modèle
const modelPath = 'file:////home/vivien/Workspace/Repositories/PerfectWriting/api/models';
// const model = loadModel(modelPath);

// Route POST pour la reconnaissance de caractères
app.post('/api/recognize', upload.single('image'), async (req, res) => {
    // Redimensionnement et compression de l'image
    const image = await sharp(req.file?.buffer).resize(28, 28).toBuffer();
    // const buffer = req.file?.buffer;
    // const arrayBuffer = buffer?.buffer.slice(
    //   buffer.byteOffset,
    //   buffer.byteOffset + buffer.byteLength
    // );
  
    // Préparation de l'image pour la prédiction
    const tensorImage = tf.node.decodeImage(image as unknown as Uint8Array);
  
    // Normalisation de l'image
    const normalizedImage = tensorImage.div(255);
  
    // Prédiction
    // const prediction = (await model).predict(normalizedImage.reshape([1, 28, 28, 1])) as unknown as tf.Tensor;
    
    // Renvoi du pourcentage de précision
    // const accuracy = prediction.dataSync()[0] * 100;
    // res.json({ accuracy: accuracy });
});

app.get('/', (req: Request, res: Response) => {
    res.send("Hello, world!")
});

userRoutes(app)

app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
});

export default app
// import { Request, Response } from "express"
// import tf from "@tensorflow/tfjs-node"
const tf = require('@tensorflow/tfjs-node')

const loadModel = async (modelPath: string) => {
  const model = await tf.node.loadSavedModel(modelPath);
  return model
}

// export default loadModel
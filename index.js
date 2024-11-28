import express from "express";
import mongoose from "mongoose";
import router, { path } from "./routes/product.route.js";
import secrets from "./secrets.js";

const database = 'node-api';
const query = 'retryWrites=true&w=majority&appName=Cluster0'
const uri = `mongodb+srv://${secrets.userName}:${secrets.password}@Cluster0.ig5jn.mongodb.net/${database}?${query}`;

mongoose.connect(uri)
    .then(() => console.log('Connected to mongoDB'))
    .catch(error => console.error("Connection error", error));

const app = express();
app.use(express.json());
app.use(path, router);

const port = 3000;

app.get("/test", (req, res) => {
    res.send({ message: new Date().toLocaleTimeString() + " Server is up"});
});

app.listen(port, () => console.log("Node server running on port " + port));

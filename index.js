import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

const userName = 'mfisli';
const password = 'a364T4st0uY9Y8km';
const database = 'node-api';
const query = 'retryWrites=true&w=majority&appName=Cluster0'

const uri = `mongodb+srv://${userName}:${password}@Cluster0.ig5jn.mongodb.net/${database}?${query}`;
mongoose.connect(uri)
    .then(() => console.log('Connected to mongoDB'))
    .catch(error => console.error("Connection error", error));

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.send(new Date().toLocaleTimeString() + " GET /");
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.listen(port, () => console.log("Node server running on port " + port));

/*
mongodb+srv://mfisli:a364T4st0uY9Y8km@cluster0.ig5jn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mfisli:a364T4st0uY9Y8km@cluster0.ig5jn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

*/
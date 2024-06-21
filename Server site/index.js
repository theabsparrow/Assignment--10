const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

// middlewire

app.use(cors())
app.use(express.json())

// mongodb collection

// const user = [
//     {subcategory: "landscape", name:"potrait", photo: "https://i.ibb.co/4MNyVYt/sunset-landscape.png"},
//     {subcategory: " Portrait Drawing", name:"Pencil Sketch Portraitt", photo: "https://i.ibb.co/4MNyVYt/sunset-landscape.png"},
//     {subcategory: "Watercolour Painting", name:"Floral Watercolor Art", photo: "https://i.ibb.co/F4JbT0z/wildlife-watercolor.png"},
//     {subcategory: "Oil Painting", name:": Realistic Oil Portrait", photo: "https://i.ibb.co/yF9dChz/fruit-oil-painting.png"},
//     {subcategory: "Charcoal Sketching", name:"Figure Charcoal Sketch", photo: "https://i.ibb.co/Q6n2rT6/charcoal-potrait.png"},
//     {subcategory: "Cartoon Drawing", name:"Comic Strip Drawing", photo: "https://i.ibb.co/ZxcMQXn/pen-ink-cartoon-drawing.png"},
//     {subcategory: "Charcoal Sketching", name:"Figure Charcoal Sketch", photo: "https://i.ibb.co/Q6n2rT6/charcoal-potrait.png"},
//     {subcategory: "Cartoon Drawing", name:"Comic Strip Drawing", photo: "https://i.ibb.co/ZxcMQXn/pen-ink-cartoon-drawing.png"},
//     {subcategory: "Charcoal Sketching", name:"Figure Charcoal Sketch", photo: "https://i.ibb.co/Q6n2rT6/charcoal-potrait.png"},
//     {subcategory: "Cartoon Drawing", name:"Comic Strip Drawing", photo: "https://i.ibb.co/ZxcMQXn/pen-ink-cartoon-drawing.png"}
// ]

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.psgygfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
        // await client.connect();


        const drawingCollection = client.db("drawingDb");
        const drawingData = drawingCollection.collection("drawing");
        
    

        app.get("/drawing", async (req, res) => {
            const cursor = drawingData.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get("/drawing/:id", async (req, res) => {
            const result = await drawingData.findOne({
                _id: new ObjectId(req.params.id),
            });
            res.send(result)
        })
        app.post("/drawing", async (req, res) => {
            const newInfo = req.body;
            const result = await drawingData.insertOne(newInfo);
            res.send(result)
        })

        app.put("/drawing/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true };
            const updatedInfo = req.body
            const info = {
                $set: {
                    name: updatedInfo.name,
                    email: updatedInfo.email,
                    item: updatedInfo.item,
                    subCategory: updatedInfo.subCategory,
                    photo: updatedInfo.photo,
                    time: updatedInfo.time,
                    price: updatedInfo.price,
                    rating: updatedInfo.rating,
                    customization: updatedInfo.customization,
                    stockStatus: updatedInfo.stockStatus,
                    detail: updatedInfo.detail,
                    userEmail: updatedInfo.userEmail,
                }
            }
            const result = await drawingData.updateOne(filter, info, option);
            res.send(result)
        })

        app.delete("/drawing/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            console.log(query)
            const result = await drawingData.deleteOne(query);
            res.send(result)
        })


        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);


app.get("/", (req, res) => {
    res.send("somewthing is happening here")
})

app.listen(port, () => {
    console.log(`something is happening here, ${port} `)
})




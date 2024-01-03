const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;


// middleware
app.use(cors())
app.use(express.json())

/**
 * ---------- MongoDB ----------------
 * UserName : sazedulislam9126         
 * Password : tCpmSZSbUYalW8Eb         
*/



const uri = "mongodb+srv://sazedulislam9126:tCpmSZSbUYalW8Eb@cluster0.4lef0mm.mongodb.net/?retryWrites=true&w=majority";

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

        // insert user 
                //one line
        const database = client.db("UsersDB").collection('users');
        // const userCollections = database.collection('users');

        // GET ALL
        app.get('/users', async(req, res) => {
            const cursor = database.find()
            const result = await cursor.toArray();
            res.send(result);
        })

        // GET SINGLE ONE
        app.get('/users/:id', async(req, res) =>{
            const id  = req.params.id;
            const query = {_id: new ObjectId(id)};
            const user = await database.findOne(query);
            res.send(user);
        })

        // CREATE 
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log("new user", user)
            const result = await database.insertOne(user);
            res.send(result);
        })

        // UPDATE SINGLE
        app.put('/users/:id', async(req, res) =>{
            const id = req.params.id;
            const user = req.body;
            console.log( 'Updated User', user) 
            const filter = {_id : new ObjectId(id)};
            const options = {upsert: true};
            const updatedUser = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            const result = await database.updateOne(filter, updatedUser,options);
            res.send(result);
        })


        // delete user
        app.delete('/users/:id', async(req, res) => {
            const id = req.params.id;
            console.log('delete me', id)
            const query = {_id: new ObjectId(id) };
            const result = await database.deleteOne(query)
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);




app.get('/', (req, res) => {
    res.send('Welcome to Simple CRUD')
})



app.listen(port, () => {
    console.log(`Simple CRUD is running on: ${port}`)
})
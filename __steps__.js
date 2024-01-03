/**
 * ----------------------------
 * MongoDB Connection
 * ----------------------------
 * 1. Create account 
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database > connect > drivers > node.js > view full code
 * 5. change the password in the uri
 * ---------------------------------
 * 
 * --------------------------------
 * CREATE
 * --------------------------------
 * 1. CREATE -------- POST
 * 2. app.post('/user/' async(req, res)=>{})
 * 3. make the function async to use await inside it 
 * 4. make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne('user');
 * 7. res.send(result)
 * 
 * CLIENT
 * 1. create fetch
 * 2. add second parameter as an object 
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type' : 'application/json}
 * 5. add body: JSON.Stringify(user)
 * -------------------------------------
 * 
 * 
 * --------------------------------------
 * READ MANY
 * --------------------------------------
 * 1. app.get('/users', async(req, res) =>{})
 * 2. const cursor = userCollection.find()
 * 3. const result = await cursor.toArray()
 * 4. res.send(result)
 * 
 * CLIENT
 * 1. create fetch in route use loader
 * 2. const loadedUsers = useLoaderData() in User components
 * 3. user.map(user => <p>{user.name}</p>)
 * 
 * ---------------------------------------
 * DELETE
 * ---------------------------------------
 * 1. create app.delete('/users/:id', async(req, res) =>{})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 5. res.send(result)
 * 
 * CLIENT 
 * 1. create Dynamic URL with id
 * 2. make sure mention 
 * 
 * **/
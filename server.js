const app = require('express')(),
      mongoClient = require('mongodb').MongoClient,
      url = "mongodb://localhost:27017/";

app.get('/',(req,res)=>{
  res.send('tjmax server');
})

mongoClient.connect(url,(err,client)=>{
  if(err) throw err;
  else {
    console.log('mongo connected');
    const db = client.db('tjmax');
  }
})

app.listen('5000',()=>console.log('server started'));

const express=require("express");
const database=require('./lib/db.std')
const port= process.env.port||5555;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true})); 
database();

app.use('/stdetails(.html)?',require('./routes/route.std.js'));

app.listen(port,()=>{
    console.log(`the server is running in the port of ${port}`)
});

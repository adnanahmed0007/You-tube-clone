import express from "express";
import mongoose from "mongoose";
import Route from "./routes/Routes.js";
const app=express();
const port=7861;
const database=`mongodb://localhost:27017`;
import cors from "cors"

async function connectioning() {
    try{
        const connect=mongoose.connect(database);

    }
    catch(e)
    {
        console.log(e);
    }
    
}
app.use(cors(
    {
    origin:'http://localhost:3000',  // Your React frontend URL
    credentials: true
    }
));
app.use(express.json());
 app.use("/api/auth",Route);
connectioning().
then(()=>
{
   
    app.listen(port,()=>
        {
            console.log(port)
        })

})
 .catch((e)=>
{
    console.log(e)
})
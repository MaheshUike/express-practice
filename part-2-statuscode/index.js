import express from "express";

const app = express();
const port = 8000;

app.get('/apple',(request,response)=>{
        response.status(200).send("Hello bhai...")
})

app.listen(port,()=>{
    console.log("Server is UP")
})

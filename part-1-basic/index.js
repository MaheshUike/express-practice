import express from 'express';

const app = express();
const port = 8000;

app.get('/home',(request ,response)=>{ 
        response.send("<h1>Hello client</h1>");
});  


app.listen(port,()=>{
    console.log("Server is up")
})
import express from 'express'
import product from './json-data/product.js'
const app = express();
const port = 8000;

// const json = {
//     id : 1,
//     name:'Mahi'
// }

app.get('/json',(request,response)=>{
    // response.send(json) 
    response.json(json)
})


app.listen(port,()=>{
    console.log("Server is  Up !")
})
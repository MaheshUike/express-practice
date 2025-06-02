import express from 'express'
import student from './router/student.js' //here we have imported

const app = express();
// here we have created the instance of express

app.use('/superman',student) 
// in order to use router file we need to import it 
//app.use("main route", component file)


app.listen(8000,()=>{
    console.log("server is up!")
})
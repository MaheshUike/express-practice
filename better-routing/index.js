import express from "express";

const app = express();
const port = 8000;

app
  .route("/student")
  .get((request, response) => {
    response.send("All student data using GET method");
  })
  .post((request, response) => {
    response.send("Add new student using POST Method");
  })
  .put((request,response)=>{
    response.send("Update students using PUT Method")
  })
  .delete((request,response)=>{
    response.send("Delete student using DELETE Method ")
  })

app.listen(port, () => {
  console.log("Server is UP!");
});

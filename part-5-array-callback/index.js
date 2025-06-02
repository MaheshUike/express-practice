import express from "express";

const app = express();
const port = 8000;

const array_callback_1 = (request, response, next) => {
  console.log("Hello from array callback first");
  next();
};
const array_callback_2 = (request, response, next) => {
  console.log("Hello from array callback second");
  next();
};
const array_callback_3 = (request, response) => {
  console.log("Hello from array callback third");
  response.send()
};

//double callback
// app.get("/home",(request,response,next)=>{
//     response.send("Hello from internal callback")
//     next();
// },(request,response)=>{
//     console.log("Hello from second callback")

// });

app.get("/array-callback", [
  array_callback_1,
  array_callback_2,
  array_callback_3,
]);

app.listen(port, () => {
  console.log("server is up");
});

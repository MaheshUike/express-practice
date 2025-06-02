import express from "express";

const app = express();
const port = 8001;

const student = [];
let studentID = 1;

app.use(express.json()); // middleware

//create student data

app.post("/create-student", (request, response) => {
  const { name, classData } = request.body;

  const newStudent = { id: studentID++, name, classData };

  student.push(newStudent);

  response.status(200).send(student);
});

// retrieve a data
app.get("/student-list", (request, response) => {
  response.status(200).send(student);
});

//getting single data using get and params

app.get("/student-data/:id", (request, response) => {
  const studentData = student.find(
    (std) => std.id === parseInt(request.params.id)
  );

  if (!studentData) {
    return response
      .status(404)
      .send("OOPS error 404 request not found must be ID is not present");
  }
  response.send(200).send(studentData);
});

// update data using put method

app.put("/update-student/:id", (request, response) => {
  const studentData = student.find(
    (std) => std.id === parseInt(request.params.id)
  );

  //   console.log(studentData)

  if (!studentData) {
    return response
      .status(404)
      .send("OOPS error 404 request not found must be ID is not present");
  }

  const { name, classData } = request.body;
  studentData.name = name;
  studentData.classData = classData;

  response.sendStatus(200).response(studentData);
});

app.delete("/student/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const index = student.findIndex((std) => std.id === id);

  if (index === -1) {
    return response.status(404).send({ error: "Student not found " });
  }

  student.splice(index, 1);
  return response.status(204).send("deleted");
});

app.listen(8000, () => {
  console.log("Server is UP !!");
});

app.listen(port, () => {
  console.log("Server is UP");
});

// POST  -->create

// GET  --> retrive

// PUT  --> update

// DELETE  ---> delete

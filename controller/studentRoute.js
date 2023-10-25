const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = new express.Router();

studentRoute.post("/create-student", (req, res) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) return err;
    else res.json(data);
  });
});

studentRoute.get("/", (req, res) => {
  studentSchema.find((err, data) => {
    if (err) return err;
    else res.json(data);
  });
});
studentRoute
  .route("/update-student/:id")
  .get((req, res) => {
    studentSchema.findById(req.params.id, (err, data) => {
      if (err) return err;
      else res.json(data);
    });
  })
  .put((req, res) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) return err;
        else res.json(data);
      }
    );
  });

studentRoute.delete("/delete-student/:id", (req, res) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return err;
    else res.json(data);
  });
});

//_id : 652d211c7a8fa691b8120b3f

//http://localhost:4000/studentRoute/ and if it is a GET request -> find()

//http://localhost:4000/studentRoute/update-student/652d211c7a8fa691b8120b3f
// and if it a GET request ->  findById()

//http://localhost:4000/studentRoute/update-student/652d211c7a8fa691b8120b3f
// and if the a PUT request -> findByIdAndUpdate()

//http://localhost:4000/studentRoute/delete-student/652d211c7a8fa691b8120b3f
// and if the a DELETE request -> findByIdAndRemove()

//NOTE: By default every request will be GET request

module.exports = studentRoute;

// ...

const Student = require("../models/Student.model");

module.exports.studentsController = {
    addStudent:  (req, res) => {
         Student.create({
          name: req.body.name,
          phone: req.body.phone,
          age: req.body.age 
        }).then(() => {
            res.json('student created ')
        })
      },
      deleteStudentById:(req,res) => {
        Student.findByIdAndRemove(req.params.id).then((students) => {
            res.json(students)
        })
      },
      getStudents:(req,res) => {
        Student.find({}).then((students) => {
            res.json(students)
        })
      },
      changeStudent: (req,res) => {
        Student.findByIdAndUpdate(req.params.id, { name: req.body.name } ).then((students) => {
            res.json(students)
        })
      }
      
}


 
  // ... остальной код

  // 1 model, 2 controller, 3 route
const { Router } = require('express')
const rout = Router()
const {studentsController} = require('../controllers/students.controller')

rout.post('/students',studentsController.addStudent)
rout.delete('/students/:id',studentsController.deleteStudentById)
rout.get('/students',studentsController.getStudents)
rout.patch('/students/:id',studentsController.changeStudent)

module.exports = rout
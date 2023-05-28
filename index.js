// const { MongoClient } = require("mongodb");

// const client = new MongoClient("mongodb+srv://djamalayl32:yakhya@cluster0.hxcel6n.mongodb.net/");

// const start = async () => {
//   try {
//     await client.connect()
//     console.log('Соединение установлено');
//     await client.db().createCollection('students')
//     const students = client.db().collection(name:'students')
//     students.insertOne()
//   } catch (e) {
//     console.log(e)
//   }
// }
// start();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())

app.use(require('./routes/students.route'))
mongoose.connect('mongodb+srv://djamalayl32:yakhya@cluster0.eb0ykyh.mongodb.net/Student', {
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() =>console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000,() => {
    console.log('Сервер запущен успешно');
})
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const errorHandler = require('./middlewares/error.middleware')

require("dotenv").config();

const app = express()


const todoRoutes = require('./routes/todo.routes')

app.use(express.json())

connectDB()
app.use('/', todoRoutes)
app.use(errorHandler)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
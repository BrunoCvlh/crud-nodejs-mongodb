const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const employeeRoute = require('./routes/employee')

mongoose.connect('mongodb://127.0.0.1:27017/dimontagna-form', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})

db.once('open', () => {
  console.log('Database connection ready!')
})

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('js'))
app.use(express.static('css'))
app.use(express.static('imgs'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server is running on port 3000')
})

app.use('/api/employee', employeeRoute)
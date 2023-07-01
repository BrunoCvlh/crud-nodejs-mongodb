const Employee = require('../models/Employee')

//Show the list of Employees
const index = (req, res, next) => {
  Employee.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occorred!'
      })
    })
}

//Show single employee
const show = (req, res, next) => {
  let employeeID = req.body.employeeID
  Employee.findById(employeeID)
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      message: 'An error occurred!'
    })
}

//add new employee
const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    email: req.body.email
  })
  employee.save()
    .then(response => {
      res.json({
        message: 'Employee added sucessfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured'
      })
    })
}

//update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID

  let updatedData = {
    name: req.body.name,
    email: req.body.email
  }

  Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
    .then(() => {
      res.json({
        message: 'Employee added sucessfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured'
      })
    })
}

// delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID
  Employee.findOneAndRemove(employeeID)
    .then(() => {
      res.json({
        message: 'Destroyed sucessfully!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured'
      })

    })
}

module.exports = {
  index, show, store, update, destroy
}
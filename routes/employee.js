const express = require('express')
const router = express.Router()
const EmployeeModel = require('../models/Employee')
const EmployeeController = require('../controllers/EmployeeController')



router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.get('/store', (req, res) => {
    res.render('index.ejs')
})
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router
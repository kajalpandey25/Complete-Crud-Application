const express = require('express')
const {home} = require('../controllers/userController.js')


const router = express.Router()

router.get('./', home)
router.post('/createuser', createUser)
router.get('/getusers', getUsers)
router.delete('/deleteuser/:id', deleteUser)
router.put('/updateuser/:id', editUser)

module.exports = router
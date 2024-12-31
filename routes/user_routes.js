const userController = require('../controlllers/user_controller')
const express = require('express')
const router = express.Router()

const userAuth = require('../middlewares/user_auth')

router.get('/', userAuth, userController.getAllUser)
router.get('/:id', userAuth, userController.getUserById)

module.exports = router
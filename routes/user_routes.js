const userController = require('../controlllers/user_controller')
const express = require('express')
const router = express.Router()

const userAuth = require('../middlewares/user_auth')

router.get('/', userAuth, userController.getAllUser)

module.exports = router
const express = require('express')
const router = express.Router()
const {registerUser,loginUser} = require('./controller')


router.route('/register').post(registerUser)
router.route('/login').get(loginUser)


module.exports = router;

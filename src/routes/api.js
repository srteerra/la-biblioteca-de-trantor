const router = require('express').Router()

const Auth = require('./auth')
const User = require('./user')
//Auth Routes
router.post('/login',Auth.login)
router.post('/signup',Auth.signup)
//User Routes
router.post('/user',User.create)
router.get('/user/:id',User.read)
router.get('/user',User.readAll)
router.put('/user',User.update)
router.delete('/user',User.delete)

module.exports=router
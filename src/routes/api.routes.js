const router = require('express').Router()
const usersRouter = require('./users.routes')
const booksRouter = require('./books.routes')

const routerApi = (app)=>{
    
    app.use('/api/v1',router)
    router.use('/users',usersRouter)
    router.use('/books',booksRouter)
    
}


module.exports = {routerApi}
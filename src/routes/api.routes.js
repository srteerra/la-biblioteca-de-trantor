const router = require('express').Router()
const usersRouter = require('./users.routes')
const booksRouter = require('./books.routes')
const booksLogRouter = require('./booksLog.routes')
const revisionsRouter = require('./revisions.routes')

const routerApi = (app)=>{
    
    app.use('/api/v1',router)
    router.use('/users',usersRouter)
    router.use('/books',booksRouter)
    router.use('/bookslog',booksLogRouter)
    router.use('/revisions',revisionsRouter)
    
}


module.exports = {routerApi}
const router = require('express').Router()
const usersRouter = require('./users.routes')
const booksRouter = require('./books.routes')
const loansRouter = require('./loans.routes')
const revisionsRouter = require('./revisions.routes')

const routerApi = (app)=>{
    
    app.use('/api/v1',router)
    router.use('/users',usersRouter)
    router.use('/books',booksRouter)
    router.use('/loans',loansRouter)
    router.use('/revisions',revisionsRouter)
    
}


module.exports = {routerApi}
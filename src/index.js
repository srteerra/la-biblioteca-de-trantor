'use extric'
if (process.env.NODE_ENV !== 'production') require('dotenv').config()    

const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const path = require('path')

//intialization
const app = express()
//const db = require('./database')
// settings
app.set('port',process.env.PORT || 3000)

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
    secret:'secretsession',
    cookie:{
        maxAge:600000,
        secure:false,
    },
    name:'_sid',
    resave:false,
    saveUninitialized:false,
    unset:'destroy'
}))
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
//routes 
app.use(require('./routes'))
//static files
app.use(express.static(path.join(__dirname,'public')))
//start server
app.listen(app.get('port'),()=>{
    console.log('Server on port: '+app.get('port'))
})
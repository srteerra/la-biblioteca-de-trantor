if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require('express')
const helmet  = require('helmet')
const compression  = require('compression')
const morgan = require("morgan");
//INITIALIZING 
const app = express()
app.set('port',process.env.PORT || 3000)

//SETTING
require('./db')

//MIDDLEWARES
app.use(morgan('tiny'))
app.use(helmet())
app.use(compression())
app.use(express.json())

//ROUTES
app.use('/api/v1',require('./routes/api'))
//STATIC FILES

//RUN SERVER
app.listen(app.get('port'),()=>{
    console.log('SERVER ON PORT: ' , app.get('port'))
})
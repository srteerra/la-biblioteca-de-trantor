require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const path = require('path')
const cors = require("cors");

const { routerApi } = require("./routes/api.routes");
const errors = require("./middlewares/error.handler");
const session = require("express-session");
const MySQLStorage = require("express-mysql-session");
//INITIALIZING
const app = express();
app.set("port", process.env.PORT || 3080);

//SETTING
require("./db");

//MIDDLEWARES
app.use(morgan("tiny"));
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "trantorlibrarysession",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStorage({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      clearExpired:true,
      checkExpirationInterval:60000,
      expiration:129600000
    }),
  })
);
app.use(
  cors({
    origin: "*",
    credentials: true,
    posedHeaders: ["set-cookie"],
  })
);
//----------------Routes--------------
routerApi(app);
//---------------Errors-----------------
app.use(errors.logErrors);
app.use(errors.boomErrorHandler);
app.use(errors.errorHandler);
//STATIC FILES
app.use(express.static(path.join(__dirname,'public')))
//RUN SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT: ", app.get("port"));
});

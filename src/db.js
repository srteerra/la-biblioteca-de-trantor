const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("DB is connected");
  }
});

module.exports = mysqlConnection
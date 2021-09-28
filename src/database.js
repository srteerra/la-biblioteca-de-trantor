const mysql = require('mysql');
const {promisify} = require('util')
const database={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    pass:process.env.DB_PASS,
}

const pool= mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        if(err.cod === 'PROTOCOL_CONNECTION_LOST') console.error('DATABASE CONNECTION WAS CLOSED')
        if(err.cod === 'ER_CON_COUNT_ERROR') console.error('DATABASE HAS TO MANY CONNECTIONS')
        if(err.cod === 'ENCONNREFUSED') console.error('DATABASE CONNECTION WAS REFUSED')
    }
    if(connection) connection.release()
    console.log('DB IS CONNECTED')
    return
});

//promisify Pool Query
pool.query=promisify(pool.query);

module.exports = pool
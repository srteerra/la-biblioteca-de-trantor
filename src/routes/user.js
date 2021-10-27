const mysqlConnection = require('../db')
exports.create=(req,res)=>{

}

exports.read=(req,res)=>{

}

exports.readAll=(req,res)=>{
    mysqlConnection.query('SELECT * FROM users',(err,rows,fields)=>{
        if (!err) {
            res.json(rows)
        }else{
            console.log(err)
        }
    })
}

exports.update=(req,res)=>{

}

exports.delete=(req,res)=>{

}
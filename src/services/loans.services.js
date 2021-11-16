const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class LoansServices{
    constructor(){}

    async find(cb, next) {
        mysqlConnection.query(
          "SELECT loan_id,loan_dateOrdered, loan_status FROM loans",
          (err, rows, fields) => {
            try {
              if (err) throw boom.conflict("Invalid request");
    
              cb(rows);
            } catch (error) {
              next(error);
            }
          }
        );
    }

    async findOneLoan(id, cb, next) {
        mysqlConnection.query(
          "SELECT loan_id,loan_dateOrdered, loan_status, book_id FROM loans WHERE id = ?",
          [id],
          (err, rows, fields) => {
            try {
              if (err) throw boom.conflict("Invalid request");
              if (rows.length === 0) throw boom.notFound("User not found");
    
              cb(rows[0]);
            } catch (error) {
              next(error);
            }
          }
        );
    }
}

module.exports = LoansServices;
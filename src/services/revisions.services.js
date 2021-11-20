const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class RevisionsServices{
  constructor(){}

  async findAll(cb, next) {
    mysqlConnection.query(
      "SELECT * FROM revisions;",
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

  async findOneRevision(id, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM revisions WHERE revision_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          console.log(err)
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

module.exports = RevisionsServices;
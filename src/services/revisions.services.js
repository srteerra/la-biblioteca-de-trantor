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

  async update(id, revision, changes, cb) {
    console.log(id, revision, changes)
    mysqlConnection.query(
      "SELECT * FROM revisions WHERE user_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            `UPDATE revisions SET revision_${revision} = ${changes} WHERE user_id = ?`,
            [revision, changes, id],
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                for (const key in changes) {
                  if (Object.hasOwnProperty.call(rows[0], key)) {
                    rows[0][key] = changes[key];
                  }
                }
                cb(rows[0]);
              } catch (error) {
                // next(error);
              }
            }
          );
        } catch (error) {
          // next(error);
        }
      }
    );
  }
}

module.exports = RevisionsServices;
const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class RevisionsServices{
  constructor(){}

  async findAll(cb, next) {
    mysqlConnection.query(
      "SELECT revisions.*, user_nickname, competition_name FROM revisions INNER JOIN users ON revisions.user_id = users.user_id INNER JOIN competitions ON revisions.competition_id = competitions.competition_id;",
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
  
  async enroll(id, competition, cb, next) {
    console.log(id,competition)
    mysqlConnection.query(
      "SELECT * FROM revisions WHERE user_id = " + [id] + ";",
      async (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length > 0) throw boom.unauthorized("User existed");
          
          var query = mysqlConnection.query(
            "INSERT INTO revisions SET user_id = " + [id] + ", competition_id = (SELECT competition_id FROM competitions WHERE competition_name = '" + [competition] + "');",
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                id = results.insertId;
                cb(id);
              } catch (error) {
                next(error);
              }
            }
          );
        } catch (error) {
          next(error);
        }
      }
    );
  }

  async update(id, revision, calif, competition, cb, next) {
    console.log(id, revision, calif, competition)
    mysqlConnection.query(
      "SELECT * FROM revisions WHERE user_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "UPDATE revisions SET revision_" + [revision] + " = " + [calif] + " WHERE user_id = " + [id] + " AND competition_id = (SELECT competition_id FROM competitions WHERE competition_name = '" + [competition] + "');",
            function(err, results, fields) {
              try {
                console.log(err)
                if (err) throw boom.conflict("Invalid request");
                for (const key in calif) {
                  if (Object.hasOwnProperty.call(rows[0], key)) {
                    rows[0][key] = calif[key];
                  }
                }
                cb(rows[0]);
              } catch (error) {
                console.log(error);
              }
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    );
  }

  async delete(id, revision, cb, next) {
    console.log(id, revision)
    mysqlConnection.query(
      "SELECT * FROM revisions WHERE user_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "UPDATE revisions SET revision_" + [revision] + " = 0 WHERE user_id = " + [id],
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                for (const key in revision) {
                  if (Object.hasOwnProperty.call(rows[0], key)) {
                    rows[0][key] = revision[key];
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
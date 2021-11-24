const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class CompetitionsServices {
  constructor() {}

  async findOne(id, cb, next) {
    mysqlConnection.query(
      "SELECT *FROM books WHERE book_id = ?",
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

  async find(cb, next) {
    mysqlConnection.query(
      "SELECT * FROM competitions",
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

  async findToSubs(cb, next) {
    mysqlConnection.query(
      "SELECT * FROM competitions WHERE competition_status = 'Convocatoria'",
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

  async create(data, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM competitions WHERE competition_name = ?",
      [data.competition_name],
      async (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length > 0) throw boom.unauthorized("Competition existed");
          
          var query = mysqlConnection.query(
            "INSERT INTO competitions SET ?",
            data,
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                data.book_id = results.insertId;
                cb(data);
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

  async updateStatus(id, cb, next) {
    console.log(id)
    mysqlConnection.query(
      "SELECT * FROM competitions WHERE competition_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("Book not found");
          mysqlConnection.query(
            "UPDATE competitions SET competition_status = 'Convocatoria' WHERE competition_id = ?",
            [id],
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                for (const key in id) {
                  if (Object.hasOwnProperty.call(rows[0], key)) {
                    rows[0][key] = id[key];
                  }
                }
                cb(rows[0]);
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

  async finishComp(id, cb, next) {
    console.log(id)
    mysqlConnection.query(
      "SELECT * FROM competitions WHERE competition_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("Book not found");
          mysqlConnection.query(
            "UPDATE competitions SET competition_status = 'Finalizada' WHERE competition_id = ?",
            [id],
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                for (const key in id) {
                  if (Object.hasOwnProperty.call(rows[0], key)) {
                    rows[0][key] = id[key];
                  }
                }
                cb(rows[0]);
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

  async delete(id, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM competitions WHERE competition_id = ?",
      [id],
      (err, rows) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "DELETE FROM competitions WHERE competition_id = ?",
            [id],
            (err, result) => {
              try {
                if (err) throw boom.conflict("Invalid request");
                cb(rows);
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
 
}

module.exports = CompetitionsServices;

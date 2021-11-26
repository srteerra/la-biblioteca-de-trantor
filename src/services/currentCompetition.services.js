const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class currentCompetitionServices {
  constructor() {}

  async find(cb, next) {
    mysqlConnection.query(
      "SELECT current_comp.*, competition_name FROM current_comp INNER JOIN competitions ON current_comp.competition_id = competitions.competition_id;",
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

  async update(name, changes, cb, next) {
    mysqlConnection.query(
      "SELECT current_comp.*, competition_name FROM current_comp INNER JOIN competitions ON current_comp.competition_id = competitions.competition_id;",
      [name],
      (err, rows, fields) => {
        try {
          console.log(err)
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("Competition not found");
          mysqlConnection.query(
            "UPDATE competitions SET competition_status = 'Finalizada' where competition_id = (SELECT competition_id FROM current_comp); UPDATE current_comp SET competition_id = (SELECT competition_id FROM competitions WHERE competition_name = '"+ [name] +"') WHERE currentComp_id = 1; UPDATE competitions SET competition_status = 'En curso' where competition_id = (SELECT competition_id FROM current_comp);",
            function(err, results, fields) {
              try {
                console.log(err)
                if (err) throw boom.conflict("Invalid request");
                for (const key in changes) {
                  if (Object.hasOwnProperty.call(rows[0], key)) {
                    rows[0][key] = changes[key];
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
}

module.exports = currentCompetitionServices;

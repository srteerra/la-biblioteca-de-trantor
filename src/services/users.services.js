const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class UsersServices {
  constructor() {}

  async findOne(id, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM users WHERE user_id = ?",
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
    mysqlConnection.query("SELECT * FROM users", (err, rows, fields) => {
      try {
        if (err) throw boom.conflict("Invalid request");

        cb(rows);
      } catch (error) {
        next(error);
      }
    });
  }

  async create(data, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM users WHERE user_email = ?",
      [data.user_email],
      async (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length > 0) throw boom.unauthorized("Email existed");
          data.user_password = await encryptPassword(data.user_password);
          mysqlConnection.query("INSERT INTO users SET ?", data, function(
            err,
            results,
            fields
          ) {
            try {
              if (err) throw boom.conflict("Invalid request");
              data.user_id = results.insertId;
              delete data.user_password;
              cb(data);
            } catch (error) {
              next(error);
            }
          });
        } catch (error) {
          next(error);
        }
      }
    );
  }

  async update(id, changes, cb, next) {
    mysqlConnection.query(
      "SELECT user_id,user_email FROM users WHERE user_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "UPDATE users SET ? WHERE user_id = ?",
            [changes, id],
            function(err, results, fields) {
              try {
                console.log(err);
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
  async delete(id, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM users WHERE user_id = ?",
      [id],
      (err, rows) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "DELETE FROM users WHERE user_id = ?",
            [id],
            (err, result) => {
              try {
                if (err) throw boom.conflict("Invalid request");
                delete rows[0].user_password;
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
  async login(email, password, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM users WHERE user_email = ?",
      [email],
      async (err, rows) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          let result = await comparePassword(password, rows[0].user_password);

          if (!result) throw boom.unauthorized("Invalidate Password");
          delete rows[0].user_password;
          cb({
            data: rows[0],
            tokens: await this.genereateTokens({
              id: rows[0].user_id,
              role: rows[0].user_role,
            }),
          });
        } catch (error) {
          next(error);
        }
      }
    );
  }
  async genereateTokens(user) {
    let refresh_token = jwt.sign(
      {
        user: user.id,
        role: user.role,
      },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_TIME,
      }
    );
    let access_token = jwt.sign(
      {
        user: user.id,
        role: user.role,
      },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_TIME,
      }
    );

    return { access_token, refresh_token };
  }
  async genereateAccessToken(data) {
    const { user, role } = data;

    let access_token = jwt.sign(
      {
        user,
        role,
      },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_TIME,
      }
    );

    return access_token;
  }
  async accessRole(data, cb, next) {
    try {
      const decoded = jwt.verify(data.token, process.env.JWT_ACCESS_SECRET);
      if (data.role !== decoded.role)
        throw boom.unauthorized("uhauthorized access");

      cb("success");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersServices;

const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class UsersServices {
  constructor() {}

  async findOne(id, cb, next) {
    mysqlConnection.query(
      "SELECT id,email,firstname,lastname,phone,age,school FROM users WHERE id = ?",
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
      "SELECT id,email,firstname,lastname,phone,age,school FROM users",
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
      "SELECT id,email,firstname,lastname,phone,age,school FROM users WHERE email = ?",
      [data.email],
      async (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length > 0) throw boom.unauthorized("Email existed");
          data.password = await encryptPassword(data.password);
          var query = mysqlConnection.query(
            "INSERT INTO users SET ?",
            data,
            function(err, results, fields) {
              try {
                if (err) throw boom.conflict("Invalid request");
                data.id = results.insertId;
                delete data.password;
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

  async update(id, changes, cb, next) {
    mysqlConnection.query(
      "SELECT id,email,firstname,lastname,phone,age,school FROM users WHERE id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "UPDATE users SET ? WHERE id = ?",
            [changes, id],
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
      "SELECT id,email,firstname,lastname,phone,age,school FROM users WHERE id = ?",
      [id],
      (err, rows) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "DELETE FROM users WHERE id = ?",
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
  async login(email, password,cb,next) {
    mysqlConnection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, rows) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          let result = await comparePassword(password,rows[0].password)
          
          if (!result) throw boom.unauthorized("Invalidate Password");
          delete rows[0].password
          cb(rows[0])
          //return await this.genereateTokens(findUser._id);
          
        } catch (error) {
          next(error);
        }
      }
    );

   

   
  }

  /*
  

  async getAccessToken(user) {
    let accessToken = await redis_client.get(user.toString())
    return accessToken
  }

  async genereateTokens(user_id) {
    let refresh_token = jwt.sign(
      {
        user: user_id,
      },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_TIME,
      }
    );
    let access_token = jwt.sign(
      {
        user: user_id,
      },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_TIME,
      }
    );
    await redis_client.get(user_id.toString(), async (err, data) => {
      if (err) throw boom.conflict("Invalid request");
      await redis_client.set(user_id.toString(), JSON.stringify({ token: refresh_token }))
    });

    return { access_token, refresh_token }

  }

  async logout(user, token) {

    //remove the refresh token
    await redis_client.del(user.toString())
    //blacklist current acces token
    await redis_client.set('BL_' + user, token)
    await redis_client.expire('BL_' + user, 3600);

    return
  }*/
}

module.exports = UsersServices;

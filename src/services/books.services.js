const mysqlConnection = require("../db");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const { encryptPassword, comparePassword } = require("../lib/helpers");
//const {v4: uuidv4} = require('uuid')

class BooksServices {
  constructor() {}

  async booksInUse(cb, next) {
    mysqlConnection.query(
      "SELECT book_id, book_title, book_author, book_category, book_status, user_nickname FROM books INNER JOIN users ON books.user_id = users.user_id;",
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
      "SELECT * FROM books",
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
      "SELECT * FROM books WHERE book_title = ?",
      [data.book_title],
      async (err, rows, fields) => {
        try {
          
          if (err) throw boom.conflict("Invalid request");
          if (rows.length > 0) throw boom.unauthorized("Book existed");
          
          var query = mysqlConnection.query(
            "INSERT INTO books SET ?",
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

  async update(id, changes, cb, next) {
    mysqlConnection.query(
      "SELECT * FROM books WHERE book_id = ?",
      [id],
      (err, rows, fields) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("Book not found");
          mysqlConnection.query(
            "UPDATE books SET ? WHERE book_id = ?",
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
      "SELECT * FROM books WHERE book_id = ?",
      [id],
      (err, rows) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          if (rows.length === 0) throw boom.notFound("User not found");
          mysqlConnection.query(
            "DELETE FROM books WHERE book_id = ?",
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

module.exports = BooksServices;

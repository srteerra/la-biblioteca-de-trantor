const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const mysqlConnection = require("../db");

const verifytoken = async (req, res, next) => {
  try {
    if (!req.session.user) throw boom.unauthorized("session unauthorized");
    if (!req.headers.authorization)
      throw boom.unauthorized("Token unauthorized");
    let token = req.headers.authorization.split(" ")[1];

    let sessionToken = req.session.user.access_token;
    if (token !== sessionToken) throw boom.unauthorized("Token unauthorized");
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    if (!decoded) throw boom.notAcceptable("Token not acceptable");

    next();
  } catch (error) {
    next(error);
  }
};

const verifyRefreshToken = async (req, res, next) => {
  try {
    if (!req.session.user) throw boom.unauthorized("session unauthorized");
    let token = req.headers.authorization.split(" ")[1];
    
    let sessionToken = req.session.user.refresh_token;

    if (token !== sessionToken) throw boom.unauthorized("Token unauthorized");
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    req.userData = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

const allowAccessAll = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    allowed(token, ["admin", "judge", "user"], next);
  } catch (error) {
    next(error);
  }
};
const allowAccessJudge = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    allowed(token, ["admin", "judge"], next);
  } catch (error) {
    next(error);
  }
};

const restricted = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    allowed(token, ["admin"], next);
  } catch (error) {
    next(error);
  }
};

const allowed = async (token, roles, next) => {
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
 
  user_id = decoded.user;
  mysqlConnection.query(
    "SELECT user_role FROM users WHERE user_id = ?",[user_id],
    (err,rows,fields)=>{
      try {
       const access= roles.find(rol=>{
          if(rol==rows[0].user_role) return true
          return false
        })
        if(!access)throw boom.unauthorized('access denied')
        
        next();
      } catch (error) {
        next(error)
      }
    }
  )
  
 
};

module.exports = {
  verifytoken,
  verifyRefreshToken,
  allowAccessAll,
  allowAccessJudge,
  restricted,
};

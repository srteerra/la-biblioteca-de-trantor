const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");

const verifytoken = async (req, res, next) => {
  try {
    if (!req.session.user) throw boom.unauthorized("session unauthorized");
    let token = req.headers.authorization.split(" ")[1];
   
    let sessionToken = req.session.user.access_token
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
    
    let sessionToken = req.session.user.refresh_token

    if (token !== sessionToken) throw boom.unauthorized("Token unauthorized");
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    req.userId = decoded.user

    next();
  } catch (error) {
    next(error);
  }
};

const allowAll = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    allowed(token, ["gamer", "admin", "manager", "subscriber", "user"], next);
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

const findUser = (users, id) => {
  return users.find((user) => {
    if (user.email === id || user.username === id || user._id === id) {
      return true;
    }
    return false;
  });
};
const allowed = async (token, roles, next) => {
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  user_id = decoded.user;
  redis_client.get("users", (err, data) => {
    try {
      if (err) throw boom.conflict("Invalid request");
      let users = JSON.parse(data).data;
      let user = findUser(users, user_id);

      if (!user) throw boom.notFound("User not found");
      redis_client.get("roles", (err, data) => {
        try {
          if (err) throw boom.conflict("Invalid request");
          let permited = JSON.parse(data).data.find((a) => {
            if (roles.includes(a.name) & user.roles.includes(a._id))
              return true;
            return false;
          });
          if (!permited) throw boom.unauthorized("unauthorized");

          next();
        } catch (error) {
          next(error);
        }
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = {
  verifytoken,
  verifyRefreshToken,
  allowAll,
  restricted,
};

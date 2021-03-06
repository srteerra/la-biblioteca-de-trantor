const router = require("express").Router();
const UsersServices = require("../services/users.services");
const auth = require("../middlewares/auth.handler");
const service = new UsersServices();

router.get("/:id", async (req, res, next) => {
  try {
    await service.findOne(
      req.params.id,
      function(data) {
        return res.status(200).json(data);
      },
      next
    );
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    await service.find(function(data) {
      return res.status(200).json(data);
    }, next);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await service.create(
      req.body,
      function(data) {
        return res.status(200).json({
          message: "Created",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    await service.update(
      req.params.id,
      req.body,
      function(data) {
        return res.status(200).json({
          message: "Updated",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await service.delete(
      req.params.id,
      function(data) {
        return res.status(200).json({
          message: "deleted",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { user_email, user_password } = req.body;
    await service.login(
      user_email,
      user_password,
      (data) => {
        req.session.user = data.tokens;
        data.data = {
          ...data.data,
          access_token: data.tokens.access_token,
          refresh_token: data.tokens.refresh_token,
        };
        data = data.data;
        res.status(200).json({
          message: "success",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    await service.create(
      req.body,
      function(data) {
        return res.status(200).json({
          message: "signup",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});
router.post("/refreshtoken", auth.verifyRefreshToken, async (req, res,next) => {
  try {
    
    const tokens = await service.genereateTokens(req.userData);
    req.session.user = tokens;
    res.status(200).json({
      tokens
    });
  } catch (error) {
    next(error);
  }
});
router.post("/logout", auth.verifytoken, async (req, res, next) => {
  try {
    req.session.destroy(null);

    res.status(200).json({
      message: "logout",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/accessRole",[auth.verifytoken], async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let role = req.body.role;

    await service.accessRole(
      { token, role },
      function(data) {
        return res.status(200).json({
          message: "acceess",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;

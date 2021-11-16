const router = require("express").Router();
const UsersServices = require("../services/users.services");
const auth = require("../middlewares/auth.handler")
const service = new UsersServices();

router.get("/address",auth.verifytoken,auth.restricted, async (req, res, next) => {
  try {
    console.log('ok')
    await service.findAddress(function(data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    next(error);
  }
});
router.get("/address/:id",auth.verifytoken,auth.restricted, async (req, res, next) => {
  try {
    await service.findOneAddress(
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
router.get("/:id",auth.verifytoken,auth.restricted, async (req, res, next) => {
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
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", auth.verifytoken,auth.restricted, async (req, res, next) => {
  try {
    await service.create(
      req.body,
      function(data) {
        return res.status(200).json({
          message: "Creted",
          data,
        });
      },
      next
    );
  } catch (error) {
    next(error);
  }
});
router.patch("/:id", auth.verifytoken,auth.restricted, async (req, res, next) => {
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

router.delete("/:id", auth.verifytoken,auth.restricted, async (req, res, next) => {
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
        req.session.user=data.tokens
        data.data = {
          ...data.data,
          access_token:data.tokens.access_token,
          refresh_token:data.tokens.refresh_token
        }
        data=data.data
        res.status(200).json({
          message:'success',
          data
        });
        
      },
      next
    );
  } catch (error) {
    next(error);
  }
});
router.post("/signup",  async (req, res, next) => {
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
router.post('/refreshtoken', auth.verifyRefreshToken, async (req, res) => {
  try {
    const token = await service.genereateAccessToken(req.userId)
    req.session.user.access_token=token
    res.status(200).json({
      access_token:token
    })

  } catch (error) {
    next(error)
  }
})
router.post("/logout", auth.verifytoken, async (req, res, next) => {
  try {
    
    req.session.destroy(null);
  
    res.status(200).json({
      message: "success"
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router;

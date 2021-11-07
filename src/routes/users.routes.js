const router = require("express").Router();
const UsersServices = require("../services/users.services");
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
    });
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
    const { email, password } = req.body;
    await service.login(
      email,
      password,
      (token) => {
        req.session.user=token
        res.status(200).json({
          message:'success',
          token
        });
        
      },
      next
    );
  } catch (error) {
    next(error);
  }
});

/*



router.post("/logout", auth.verifytoken, async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    await service.logout(req.session.userAccess, token)
    req.session.destroy(null);
    req.logout();
    res.status(200).json({
      message: "success"
    })
  } catch (error) {
    next(error)
  }
})

router.post('/token', auth.verifyRefreshToken, async (req, res) => {
  try {
    const { email, password } = req.body
    const token = await service.login(email, password)
    res.status(200).json({
      token: token
    })

  } catch (error) {
    next(error)
  }
})

exports.readAll=(req,res)=>{
    mysqlConnection.query('SELECT * FROM users',(err,rows,fields)=>{
        if (!err) {
            res.json(rows)
        }else{
            console.log(err)
        }
    })
}
*/
module.exports = router;

const router = require("express").Router();
const LoansServices = require("../services/loans.services");
const auth = require("../middlewares/auth.handler")
const service = new LoansServices();

router.get("/loans", async (req, res, next) => {
    try {
      console.log('ok')
      await service.find(function(data) {
        return res.status(200).json(data);
      });
    } catch (error) {
      next(error);
    }
  });

  router.get("/loans/:id", async (req, res, next) => {
    try {
      await service.findOneLoan(
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

  module.exports = router;
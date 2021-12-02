const router = require("express").Router();
const booksLogServices = require("../services/booksLog.services");
const auth = require("../middlewares/auth.handler")
const service = new booksLogServices();

router.get("/", async (req, res, next) => {
  try {
    
    await service.find(function(data) {
      return res.status(200).json(data);
    },next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
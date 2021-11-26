const router = require("express").Router();
const currentCompetitionServices = require("../services/currentCompetition.services");
const auth = require("../middlewares/auth.handler");
const service = new currentCompetitionServices();

router.get("/", async (req, res, next) => {
  try {
    await service.find(function(data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:name", async (req, res, next) => {
  try {
    await service.update(
      req.params.name,
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

module.exports = router;

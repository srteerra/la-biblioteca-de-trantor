const router = require("express").Router();
const RevisionsServices = require("../services/revisions.services");
const auth = require("../middlewares/auth.handler")
const service = new RevisionsServices();

router.get("/revisions", async (req, res, next) => {
  try {
    console.log('ok')
    await service.findAll(function(data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    next(error);
  }
});

router.get("/revisions/:id", async (req, res, next) => {
  try {
    await service.findOneRevision(
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

router.get("/:id", async (req, res, next) => {
  try {
    await service.findOneRevision(
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
    await service.findAll(function(data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
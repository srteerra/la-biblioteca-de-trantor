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

router.patch("/update/:id/:revision/:calif", async (req, res,next) => {
  try {
    console.log(req.body)
    await service.update(
      req.params.id,
      req.params.revision,
      req.params.calif,
      function(data) {
        return res.status(200).json({
          message: "Updated",
          data,
        });
      },
    );
  } catch (error) {
    next(error)
  }
});

router.patch("/delete/:id/:revision", async (req, res,next) => {
  try {
    await service.delete(
      req.params.id,
      req.params.revision,
      function(data) {
        return res.status(200).json({
          message: "Deleted",
          data,
        });
      },
    );
  } catch (error) {
    next(error)
  }
});

module.exports = router;
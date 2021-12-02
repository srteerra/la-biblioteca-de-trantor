const router = require("express").Router();
const CompetitionsServices = require("../services/competitions.services");
const auth = require("../middlewares/auth.handler")
const service = new CompetitionsServices();

router.get("/compToSubs", async (req, res, next) => {
  try {
    await service.findToSubs(function(data) {
      return res.status(200).json(data);
    },next);
  } catch (error) {
    next(error);
  }
});

router.get("/dashCC", async (req, res, next) => {
  try {
    await service.dashboardCC(function(data) {
      return res.status(200).json(data);
    },next);
  } catch (error) {
    next(error);
  }
});

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
    },next);
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
    await service.updateStatus(
      req.params.id,
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

router.patch("/:id/finish", async (req, res, next) => {
  try {
    await service.finishComp(
      req.params.id,
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

module.exports = router;

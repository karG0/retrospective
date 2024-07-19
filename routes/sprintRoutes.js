const express = require("express");
const router = express.Router();
const sprintController = require("../controllers/sprintController");

router.post("/", sprintController.createSprint);
router.get("/", sprintController.getAllSprints);
router.get("/:sprintId", sprintController.getSprintById);
router.get("/project/:projectId", sprintController.getSprintsByProjectId);
router.put("/:sprintId", sprintController.updateSprint);
router.delete("/:sprintId", sprintController.deleteSprint);

module.exports = router;

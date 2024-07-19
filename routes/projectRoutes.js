const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/", projectController.createProject);
router.get("/", projectController.getAllProjects);
router.get("/:projectId", projectController.getProjectById);
router.get("/team/:teamId", projectController.getProjectsByTeamId);
router.put("/:projectId", projectController.updateProject);
router.delete("/:projectId", projectController.deleteProject);

module.exports = router;

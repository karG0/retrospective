const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

router.post("/", teamController.createTeam);
router.get("/", teamController.getAllTeams);
router.get("/:teamId", teamController.getTeamById);
router.put("/:teamId", teamController.updateTeam);
router.delete("/:teamId", teamController.deleteTeam);

module.exports = router;

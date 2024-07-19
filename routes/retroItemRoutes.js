const express = require("express");
const router = express.Router();
const retroItemController = require("../controllers/retroItemController");

router.post("/", retroItemController.createRetroItem);
router.get("/", retroItemController.getAllRetroItems);
router.get("/:itemId", retroItemController.getRetroItemById);
router.get("/sprint/:sprintId", retroItemController.getRetroItemsBySprintId);
router.put("/:itemId", retroItemController.updateRetroItem);
router.delete("/:itemId", retroItemController.deleteRetroItem);

module.exports = router;

const express = require("express");
const router = express.Router();
const screenshotsController = require("../controllers/screenshotsController");

router.get("/", screenshotsController.getAllScreenshots);
router.get("/:id", screenshotsController.getScreenshotById);

module.exports = router;

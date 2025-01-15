const express = require("express");
const router = express.Router();
const screenshotsController = require("../controllers/screenshotsController");

/**
 * @swagger
 * /api/screenshots:
 *   get:
 *     tags:
 *         - screenshots
 *     summary: Get all screenshots - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of screenshots
 */
router.get("/", screenshotsController.getAllScreenshots);

/**
 * @swagger
 * /api/screenshots/{id}:
 *   get:
 *     tags:
 *         - screenshots
 *     summary: Gets a specific screenshot based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single screenshot
 */
router.get("/:id", screenshotsController.getScreenshotById);

module.exports = router;

const express = require("express");
const router = express.Router();
const platformsController = require("../controllers/platformsController");

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *         - platforms
 *     summary: Get all platforms - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of platforms
 */
router.get("/", platformsController.getAllPlatforms);

/**
 * @swagger
 * /api/platforms/{id}:
 *   get:
 *     tags:
 *         - platforms
 *     summary: Gets a specific platform based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single platform
 */
router.get("/:id", platformsController.getPlatformById);

module.exports = router;

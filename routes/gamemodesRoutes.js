const express = require("express");
const router = express.Router();
const gamemodesController = require("../controllers/gamemodesController");

/**
 * @swagger
 * /api/gamemodes:
 *   get:
 *     tags:
 *         - gamemodes
 *     summary: Get all gamemodess - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of gamemodes
 */
router.get("/", gamemodesController.getAllGameModes);

/**
 * @swagger
 * /api/gamemodes/{id}:
 *   get:
 *     tags:
 *         - gamemodes
 *     summary: Gets a specific gamemode based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single gamemode
 */
router.get("/:id", gamemodesController.getGameModeById);

module.exports = router;

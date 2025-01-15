const express = require("express");
const router = express.Router();
const game_coversController = require("../controllers/game_coversController");

/**
 * @swagger
 * /api/game_covers:
 *   get:
 *     tags:
 *         - game_covers
 *     summary: Get all covers - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of covers
 */
router.get("/", game_coversController.getAllCovers);

/**
 * @swagger
 * /api/game_covers/{id}:
 *   get:
 *     tags:
 *         - game_covers
 *     summary: Gets a specific cover based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single cover
 */
router.get("/:id", game_coversController.getCoverById);

module.exports = router;

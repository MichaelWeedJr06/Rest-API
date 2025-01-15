const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");

/**
 * @swagger
 * /api/characters:
 *   get:
 *     tags:
 *         - characters
 *     summary: Get all characters - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of characters
 */
router.get("/", charactersController.getAllCharacters);

/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     tags:
 *         - characters
 *     summary: Gets a specific character based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single character
 */
router.get("/:id", charactersController.getCharacterById);

module.exports = router;

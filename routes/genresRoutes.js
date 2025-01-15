const express = require("express");
const router = express.Router();
const genresController = require("../controllers/genresController");

/**
 * @swagger
 * /api/genres:
 *   get:
 *     tags:
 *         - genres
 *     summary: Get all genres - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of genres
 */
router.get("/", genresController.getAllGenres);

/**
 * @swagger
 * /api/genres/{id}:
 *   get:
 *     tags:
 *         - genres
 *     summary: Gets a specific genre based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single genre
 */
router.get("/:id", genresController.getGenreById);

module.exports = router;

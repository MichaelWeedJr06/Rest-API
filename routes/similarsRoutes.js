const express = require("express");
const router = express.Router();
const similarsController = require("../controllers/similarsController");

/**
 * @swagger
 * /api/similar:
 *   get:
 *     tags:
 *         - similars
 *     summary: Get all similars - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of similars
 */
router.get("/", similarsController.getAllSimilars);

/**
 * @swagger
 * /api/similar/{id}:
 *   get:
 *     tags:
 *         - similars
 *     summary: Gets a specific similar based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single similar
 */
router.get("/:id", similarsController.getSimilarById);

module.exports = router;

const express = require("express");
const router = express.Router();
const websitesController = require("../controllers/websitesController");

/**
 * @swagger
 * /api/websites:
 *   get:
 *     tags:
 *         - websites
 *     summary: Get all websites - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A list of websites
 */
router.get("/", websitesController.getAllWebsites);

/**
 * @swagger
 * /api/websites/{id}:
 *   get:
 *     tags:
 *         - websites
 *     summary: Gets a specific website based on id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A single website
 */
router.get("/:id", websitesController.getWebsiteById);

module.exports = router;

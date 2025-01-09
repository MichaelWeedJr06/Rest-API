const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");

router.get("/", charactersController.getAllCharacters);
router.get("/:id", charactersController.getCharacterById);

module.exports = router;

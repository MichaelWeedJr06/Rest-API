const GameMode = require("../models/gamemode");
async function getAllGameModes(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const gamemodes = await GameMode.getAllGameModes(start, limit, gameid);
    res.status(200).json(gamemodes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gamemodes." });
  }
}

async function getGameModeById(req, res) {
  try {
    const gamemode = await GameMode.getGameModeById(req.params.id);
    if (gamemode) {
      res.status(200).json(gamemode);
    } else {
      res.status(404).json({ error: "Gamemode not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gamemode." });
  }
}

module.exports = { getAllGameModes, getGameModeById };

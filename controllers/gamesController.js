const Game = require("../models/game");

async function getAllGames(req, res) {
  try {
    const { start = 0, limit = 50 } = req.query;
    const games = await Game.getAllGames(start, limit);
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games." });
  }
}

async function getGameById(req, res) {
  try {
    const game = await Game.getGameById(req.params.id);
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ error: "Game not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game." });
  }
}

module.exports = { getAllGames, getGameById };

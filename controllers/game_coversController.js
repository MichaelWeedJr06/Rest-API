const Website = require("../models/game_cover");
async function getAllCovers(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const covers = await Website.getAllCovers(start, limit, gameid);
    res.status(200).json(covers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game covers." });
  }
}

async function getCoverById(req, res) {
  try {
    const cover = await Website.getCoverById(req.params.id);
    if (cover) {
      res.status(200).json(cover);
    } else {
      res.status(404).json({ error: "Game cover not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game cover." });
  }
}

module.exports = { getAllCovers, getCoverById };

const Genre = require("../models/genres");
async function getAllGenres(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const genres = await Genre.getAllGenres(start, limit, gameid);
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games." });
  }
}

async function getGenreById(req, res) {
  try {
    const genre = await Genre.getGenreById(req.params.id);
    if (genre) {
      res.status(200).json(genre);
    } else {
      res.status(404).json({ error: "Game not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game." });
  }
}

module.exports = { getAllGenres, getGenreById };

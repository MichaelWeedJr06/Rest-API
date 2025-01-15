const Similar = require("../models/similar");
async function getAllSimilars(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const similars = await Similar.getAllSimilar(start, limit, gameid);
    res.status(200).json(similars);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch similars." });
  }
}

async function getSimilarById(req, res) {
  try {
    const similar = await Similar.getSimilarById(req.params.id);
    if (similar) {
      res.status(200).json(similar);
    } else {
      res.status(404).json({ error: "Similar not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Similar." });
  }
}

module.exports = { getAllSimilars, getSimilarById };

const Website = require("../models/websites");
async function getAllWebsites(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const websites = await Website.getAllWebsites(start, limit, gameid);
    res.status(200).json(websites);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gamemodes." });
  }
}

async function getWebsiteById(req, res) {
  try {
    const website = await Website.getWebsiteById(req.params.id);
    if (website) {
      res.status(200).json(website);
    } else {
      res.status(404).json({ error: "Gamemode not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gamemode." });
  }
}

module.exports = { getAllWebsites, getWebsiteById };

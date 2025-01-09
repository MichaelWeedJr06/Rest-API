const Screenshot = require("../models/screenshot");

async function getAllScreenshots(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const screenshots = await Screenshot.getAllScreenshots(
      start,
      limit,
      gameid
    );
    res.status(200).json(screenshots);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch platforms." });
  }
}

async function getScreenshotById(req, res) {
  try {
    const screenshot = await Screenshot.getScreenshotById(req.params.id);
    if (screenshot) {
      res.status(200).json(screenshot);
    } else {
      res.status(404).json({ error: "Platform not found." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch platform." });
  }
}

module.exports = {
  getAllScreenshots,
  getScreenshotById,
};

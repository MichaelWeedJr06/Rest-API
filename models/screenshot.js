const db = require("../config/db");

async function getAllScreenshots(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from screenshots ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getScreenshotById(Id) {
  const [rows] = await db.execute(
    "Select * from screenshots Where screenshot_id = ?",
    [Id]
  );
  return rows[0];
}

module.exports = {
  getAllScreenshots,
  getScreenshotById,
};

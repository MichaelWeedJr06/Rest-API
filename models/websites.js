const db = require("../config/db");

async function getAllWebsites(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from websites ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getWebsiteById(gameId) {
  const [rows] = await db.execute(
    "Select * from websites Where website_id = ?",
    [gameId]
  );
  return rows[0];
}

module.exports = { getAllWebsites, getWebsiteById };

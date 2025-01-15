const db = require("../config/db");

async function getAllCovers(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from game_covers ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getCoverById(gameId) {
  const [rows] = await db.execute(
    "Select * from game_covers Where cover_id = ?",
    [gameId]
  );
  return rows[0];
}

module.exports = { getAllCovers, getCoverById };

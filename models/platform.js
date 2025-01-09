const db = require("../config/db");

async function getAllPlatforms(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from platforms p join game_platform gp on p.platform_id = gp.platform_id ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getPlatformById(Id) {
  const [rows] = await db.execute(
    "Select * from screenshots Where screenshot_id = ?",
    [Id]
  );
  return rows[0];
}

module.exports = {
  getAllPlatforms,
  getPlatformById,
};

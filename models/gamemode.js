const db = require("../config/db");

async function getAllGameModes(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from game_modes gm join game_game_mode ggm on gm.game_mode_id = ggm.game_mode_id ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getGameModeById(gameId) {
  const [rows] = await db.execute(
    "Select * from game_modes Where game_mode_id = ?",
    [gameId]
  );
  return rows[0];
}

module.exports = { getAllGameModes, getGameModeById };

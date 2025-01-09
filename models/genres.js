const db = require("../config/db");

async function getAllGenres(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from genres g join game_genre gg on g.genre_id = gg.genre_id ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getGenreById(gameId) {
  const [rows] = await db.execute("Select * from genres Where genre_id = ?", [
    gameId,
  ]);
  return rows[0];
}

module.exports = { getAllGenres, getGenreById };

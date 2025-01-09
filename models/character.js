const db = require("../config/db");

async function getAllCharacters(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where game_id = ? `, [gameid]);
  }

  const [rows] = await db.execute(
    `Select * from characters c join game_characters gc on c.character_id = gc.characters_id ${conditions} Limit ?,?`,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getCharacterById(gameId) {
  const [rows] = await db.execute(
    "Select * from characters Where character_id = ?",
    [gameId]
  );
  return rows[0];
}

module.exports = { getAllCharacters, getCharacterById };

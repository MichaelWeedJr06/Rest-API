const db = require("../config/db");
async function getAllSimilar(start = 0, limit = 50, gameid) {
  let conditions = ``;
  if (gameid) {
    conditions = db.format(` where gs.game_id = ? `, [gameid]);
  }
  const [rows] = await db.execute(
    `select g.*, g2.game_id as Game_similar_id, g2.name as Game_similar_name, g2.category as Game_similar_category, g2.summary as Game_similar_summary from games g
inner join game_similar gs on gs.game_id = g.game_id
inner join games g2 on g2.game_id = gs.similar_game_id ${conditions} limit ?,? `,
    [start.toString(), limit.toString()]
  );
  return rows;
}

async function getSimilarById(gameId) {
  const [rows] = await db.execute(
    "Select g.* from game_similar gs join games g on g.game_id = gs.similar_game_id where gs.game_id =  ?",
    [gameId]
  );
  return rows;
}
module.exports = { getAllSimilar, getSimilarById };

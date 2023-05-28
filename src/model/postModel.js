const db = require("../config/db");

const getComentsById = (id) =>
  new Promise((resolve, rejected) => {
    db.query(
      "SELECT * FROM coments_in_posts WHERE id_post = ?",
      [id],
      (error, result) => {
        if (error) {
          rejected(error);
        } else {
          resolve(result);
        }
      }
    );
  });

module.exports = {
  getComentsById,
};

const db = require("../config/db");

const insertPost = (date, img, description, id_author) => {
  db.query(
    "INSERT INTO post (date, img, description,id_author) values (?,?,?,?)",
    [date, img, description, id_author],
    (error, result) => {
      if (error) {
        console.log(error);
        return error;
      } else {
        return result;
      }
    }
  );
};

const getPostByUser = (id) =>
  new Promise((resolve, rejected) => {
    db.query(
      "SELECT * FROM post WHERE id_author = ?",
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
  insertPost,
  getPostByUser,
};

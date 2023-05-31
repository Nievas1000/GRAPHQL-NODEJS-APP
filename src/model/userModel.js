const db = require("../config/db");

const createUser = (email, password, username) => {
  db.query(
    "INSERT INTO user (email, password, username) values (?,?,?)",
    [email, password, username],
    (error, result) => {
      if (error) {
        return error;
      } else {
        return result;
      }
    }
  );
};

const getUsers = () =>
  new Promise((resolve, rejected) => {
    db.query("SELECT * FROM user", (error, result) => {
      if (error) {
        rejected(error);
      } else {
        resolve(result);
      }
    });
  });

const getUserByMail = (email) =>
  new Promise((resolve, rejected) => {
    db.query("SELECT * FROM user WHERE email = ?", [email], (error, result) => {
      if (error) {
        rejected(error);
      } else {
        resolve(result);
      }
    });
  });

const updateInfo = (id, description, username) =>
  new Promise((resolve, rejected) => {
    db.query(
      "UPDATE user SET username = ?, description = ?  WHERE id = ?",
      [username, description, id],
      (err, result) => {
        if (err) {
          rejected(err);
        } else {
          resolve(result);
        }
      }
    );
  });

module.exports = {
  createUser,
  getUsers,
  getUserByMail,
  updateInfo,
};

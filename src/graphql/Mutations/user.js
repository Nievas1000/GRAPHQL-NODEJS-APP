const { createUser, getUserByMail } = require("../../model/userModel");
const { encrypt } = require("../../Helpers/handleBcrypt");

const registrerUser = async (root, args) => {
  const { email, password, username } = args;
  const userExist = await getUserByMail(email);
  if (userExist.length == 0) {
    const hashPassword = await encrypt(password);
    createUser(email, hashPassword, username);
    return "User create!";
  } else {
    throw new Error("Email already exists");
  }
};

const uploadImage = async (root, args) => {
  console.log(args);
};

module.exports = {
  registrerUser,
  uploadImage,
};

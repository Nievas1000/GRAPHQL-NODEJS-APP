const {
  createUser,
  getUserByMail,
  updateInfo,
} = require("../../model/userModel");
const { encrypt } = require("../../Helpers/handleBcrypt");

const registrerUser = async (__, args) => {
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

const updateInfoProfile = async (__, args) => {
  const { id, description, username } = args;
  const result = await updateInfo(id, description, username);
  return "Updated!";
};

module.exports = {
  registrerUser,
  updateInfoProfile,
};

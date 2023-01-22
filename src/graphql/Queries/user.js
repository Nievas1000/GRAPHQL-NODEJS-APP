const { compare } = require("../../Helpers/handleBcrypt");
const { getUserByMail } = require("../../model/userModel");

const getUserByEmail = async (root, args) => {
  const { email } = args;
  const userExist = await getUserByMail(email);
  if (userExist.length > 0) {
    return userExist[0];
  } else {
    throw new Error("User doesn't exist");
  }
};

const loginUser = async (root, args) => {
  const { email, password } = args;
  const userExist = await getUserByMail(email);
  if (userExist.length > 0) {
    const passwordCorrect = await compare(password, userExist[0].password);
    if (passwordCorrect) {
      return userExist[0];
    } else {
      throw new Error("Wrong email/password combination");
    }
  } else {
    throw new Error("User doesn't exist");
  }
};

module.exports = { getUserByEmail, loginUser };

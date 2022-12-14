const { GraphQLString } = require("graphql");
const { createUser, getUserByMail } = require("../../model/userModel");
const { encrypt, compare } = require("../../Helpers/handleBcrypt");

const registrerUser = {
  type: GraphQLString,
  description: "New user registrer.",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    username: { type: GraphQLString },
  },
  async resolve(root, args) {
    const { email, password, username } = args;
    const userExist = await getUserByMail(email);
    if (userExist.length == 0) {
      const hashPassword = await encrypt(password);
      createUser(email, hashPassword, username);
      return "User create!";
    } else {
      return "Email already exists";
    }
  },
};

const loginUser = {
  type: GraphQLString,
  description: "Login user",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(root, args) {
    const { email, password } = args;
    const userExist = await getUserByMail(email);
    if (userExist.length > 0) {
      const passwordCorrect = await compare(password, userExist[0].password);
      if (passwordCorrect) {
        return userExist[0].email;
      } else {
        return "Wrong email/password combination";
      }
    } else {
      return "User doesn't exist";
    }
  },
};

module.exports = {
  registrerUser,
  loginUser,
};

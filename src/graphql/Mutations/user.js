const { GraphQLString, GraphQLList } = require("graphql");
const { createUser, getUserByMail } = require("../../model/userModel");
const { encrypt, compare } = require("../../Helpers/handleBcrypt");
const { user } = require("../typedef");

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
      throw new Error("Email already exists");
    }
  },
};

const loginUser = {
  type: user,
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
        return userExist[0];
      } else {
        throw new Error("Wrong email/password combination");
      }
    } else {
      throw new Error("User doesn't exist");
    }
  },
};

module.exports = {
  registrerUser,
  loginUser,
};

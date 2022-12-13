const { GraphQLString } = require("graphql");
const { createUser, getUserByMail } = require("../../model/userModel");
const { encrypt } = require("../../Helpers/handleBcrypt");
const { createUserResponse } = require("../typedef");

const registrer = {
  type: GraphQLString,
  description: "New user registrer!",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    username: { type: GraphQLString },
  },
  async resolve(root, args) {
    const { email, password, username } = args;
    const userExist = await getUserByMail(email);
    console.log(userExist);
    if (userExist.length == 0) {
      const hashPassword = await encrypt(password);
      createUser(email, hashPassword, username);
      return "User create!";
    } else {
      return "User already exists";
    }
  },
};

module.exports = {
  registrer,
};

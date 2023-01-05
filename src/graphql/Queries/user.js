const { GraphQLString, GraphQLList } = require("graphql");
const { getUsers, getUserByMail } = require("../../model/userModel");
const { user } = require("../typedef");

const users = {
  type: new GraphQLList(user),
  description: "Return all users",
  async resolve() {
    const users = await getUsers();
    return users;
  },
};

const getUserByEmail = {
  type: user,
  description: "Return user by email",
  args: {
    email: { type: GraphQLString },
  },
  async resolve(root, args) {
    const { email } = args;
    const userExist = await getUserByMail(email);
    if (userExist.length > 0) {
      return userExist[0];
    } else {
      throw new Error("User doesn't exist");
    }
  },
};

module.exports = { users, getUserByEmail };

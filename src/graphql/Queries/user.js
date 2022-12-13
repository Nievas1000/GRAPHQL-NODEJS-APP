const { GraphQLString, GraphQLList } = require("graphql");
const { getUsers } = require("../../model/userModel");
const { user } = require("../typedef");

const users = {
  type: new GraphQLList(user),
  description: "Return all users",
  async resolve() {
    const users = await getUsers();
    return users;
  },
};

module.exports = { users };

const { getUserByEmail, loginUser } = require("./Queries/user");
const { registrerUser } = require("./Mutations/user");

const Query = {
  getUserByEmail,
  loginUser,
};

const Mutation = {
  registrerUser,
};

const resolvers = {
  Query,
  Mutation,
};

module.exports = { resolvers };

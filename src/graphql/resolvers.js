const { getUserByEmail, loginUser } = require("./Queries/user");
const { registrerUser, updateInfoProfile } = require("./Mutations/user");
const { getComentsByPost } = require("./Queries/post");

const Query = {
  getUserByEmail,
  loginUser,
  getComentsByPost,
};

const Mutation = {
  registrerUser,
  updateInfoProfile,
};

const resolvers = {
  Query,
  Mutation,
};

module.exports = { resolvers };

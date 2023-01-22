const { getUserByEmail, loginUser } = require("./Queries/user");
const { postsByUser } = require("./Queries/post");
const { createPost, updatePost } = require("./Mutations/post");
const { registrerUser } = require("./Mutations/user");

const Query = {
  postsByUser,
  getUserByEmail,
  loginUser,
};

const Mutations = {
  createPost,
  updatePost,
  registrerUser,
};

const resolvers = {
  Query,
};

module.exports = { resolvers };

const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { users, getUserByEmail } = require("./Queries/user");
const { registrerUser, loginUser } = require("./Mutations/user");
const { postsByUser } = require("./Queries/post");
const { createPost, updatePost } = require("./Mutations/post");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",
  fields: {
    users,
    postsByUser,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    registrerUser,
    getUserByEmail,
    loginUser,
    createPost,
    updatePost,
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;

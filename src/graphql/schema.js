const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { users } = require("./Queries/user");
const { postByUser } = require("./Queries/post");
const { registrerUser, loginUser } = require("./Mutations/user");
const { createPost } = require("./Mutations/post");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type",
  fields: {
    users,
    postByUser,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The root mutation type",
  fields: {
    registrerUser,
    loginUser,
    createPost,
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;

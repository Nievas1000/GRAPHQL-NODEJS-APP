const { GraphQLObjectType, GraphQLString } = require("graphql");

const user = new GraphQLObjectType({
  name: "UserType",
  fields: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const createUserResponse = new GraphQLObjectType({
  name: "CreateUserResponse",
  fields: {
    message: { type: GraphQLString },
  },
});

module.exports = {
  user,
  createUserResponse,
};

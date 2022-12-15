const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const user = new GraphQLObjectType({
  name: "UserType",
  fields: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const post = new GraphQLObjectType({
  name: "PostType",
  fields: {
    date: { type: GraphQLString },
    img: { type: GraphQLString },
    description: { type: GraphQLString },
    id_author: { type: GraphQLInt },
  },
});

const responseOk = new GraphQLObjectType({
  name: "ResponseOk",
  fields: {
    status: { type: GraphQLInt },
    message: { type: GraphQLString },
  },
});

module.exports = {
  user,
  post,
  responseOk,
};

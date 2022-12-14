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

module.exports = {
  user,
  post,
};

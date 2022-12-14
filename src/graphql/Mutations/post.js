const { GraphQLInt, GraphQLString } = require("graphql");
const { post } = require("../typedef");
const { insertPost } = require("../../model/postModel");

const createPost = {
  type: GraphQLString,
  description: "New post created.",
  args: {
    date: { type: GraphQLString },
    img: { type: GraphQLString },
    description: { type: GraphQLString },
    id_author: { type: GraphQLInt },
  },
  async resolve(root, args) {
    const { date, img, description, id_author } = args;
    insertPost(date, img, description, id_author);
    return "Created";
  },
};

module.exports = {
  createPost,
};

const { GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const { post } = require("../typedef");
const { insertPost, actualizePost, getPost } = require("../../model/postModel");

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

const updatePost = {
  type: new GraphQLList(post),
  description: "Update a post.",
  args: {
    id: { type: GraphQLInt },
    date: { type: GraphQLString },
    img: { type: GraphQLString },
    description: { type: GraphQLString },
    id_author: { type: GraphQLInt },
  },
  async resolve(root, args) {
    const { id, date, img, description, id_author } = args;
    await actualizePost(id, date, img, description, id_author);
    const newPost = await getPost(id);
    return newPost;
  },
};

module.exports = {
  createPost,
  updatePost,
};

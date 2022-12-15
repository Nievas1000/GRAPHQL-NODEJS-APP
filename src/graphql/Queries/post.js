const { GraphQLList, GraphQLInt } = require("graphql");
const { getPostsByUser } = require("../../model/postModel");
const { post } = require("../typedef");

const postsByUser = {
  type: new GraphQLList(post),
  description: "Return all post from a user",
  args: {
    id: { type: GraphQLInt },
  },
  async resolve(root, args) {
    const posts = await getPostsByUser(args.id);
    console.log(posts);
    return posts;
  },
};

module.exports = {
  postsByUser,
};

const { GraphQLList, GraphQLInt } = require("graphql");
const { getPostByUser } = require("../../model/postModel");
const { post } = require("../typedef");

const postByUser = {
  type: new GraphQLList(post),
  description: "Return all post from a user",
  args: {
    id: { type: GraphQLInt },
  },
  async resolve() {
    console.log(args);
    const posts = await getPostByUser(this.args.id);
    return posts;
  },
};

module.exports = {
  postByUser,
};

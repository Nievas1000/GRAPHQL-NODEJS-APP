const { getPostsByUser } = require("../../model/postModel");
const { post } = require("../typedef");

const postsByUser = async (root, args) => {
  const posts = await getPostsByUser(args.id);
  console.log(posts);
  return posts;
};

module.exports = {
  postsByUser,
};

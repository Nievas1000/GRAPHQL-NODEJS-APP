const { insertPost, actualizePost, getPost } = require("../../model/postModel");

const createPost = (root, args) => {
  const { date, img, description, id_author } = args;
  insertPost(date, img, description, id_author);
  return "Created";
};

const updatePost = async (root, args) => {
  const { id, date, img, description, id_author } = args;
  await actualizePost(id, date, img, description, id_author);
  const newPost = await getPost(id);
  return newPost;
};

module.exports = {
  createPost,
  updatePost,
};

const { getComentsById } = require("../../model/postModel");

const getComentsByPost = async (_, args) => {
  const { id } = args;
  const coments = await getComentsById(id);
  return coments;
};

module.exports = {
  getComentsByPost,
};

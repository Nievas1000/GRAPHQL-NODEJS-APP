const bcrypt = require("bcryptjs");

const encrypt = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const compare = async (plainPassword, hashPassword) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};

module.exports = {
  encrypt,
  compare,
};

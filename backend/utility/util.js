const jwt = require("jsonwebtoken");

KEY="kdfkdjfkdfklsdjjfds"

function generateToken(payload) {
    return jwt.sign(payload, KEY);
  }

  function filterUser(user) {
    const { password, ...restUser } = JSON.parse(JSON.stringify(user));
    return restUser;
  }

  module.exports = {
    generateToken,
    filterUser,
  };
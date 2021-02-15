const jwt = require("jsonwebtoken");

function generateToken(payload) {
    return jwt.sign(payload, process.env.KEY);
  }

  function filterUser(user) {
    const { password, ...restUser } = JSON.parse(JSON.stringify(user));
    return restUser;
  }

  module.exports = {
    generateToken,
    filterUser,
  };
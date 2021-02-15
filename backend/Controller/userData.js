const { singUpTable } = require("../DB/db");
const md5 = require("md5");
const passport = require("passport");

function userDataController(app) {
  app.get(
    "/userdetails",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const allBlogs = await singUpTable.findAll();
      response.status(200).send(allBlogs);
    }
  );
}

module.exports ={
    userDataController,
}
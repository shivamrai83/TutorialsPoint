const {singUpTable} = require('../DB/db');
const md5 =require('md5');
const {filterUser,generateToken} = require("../utility/util")

function singUpController(app){
app.get("/data", async function (request, response) {
    const data= await singUpTable.findAll();
    response.send(data);
  });

app.post("/singup",async function (request,response){
    const {fullName, email, password, phone} = request.body;
    const createUser = await singUpTable.create({
        fullName,
        email,
        password:md5(password),     
        phone,
    })
    createUser.save();
    response.json("done");
})
}

module.exports={
    singUpController,
};
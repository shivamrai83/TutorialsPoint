const {singUpTable} = require('../DB/db');
const md5 =require('md5');
const {filterUser,generateToken} = require("../utility/util")

function LogInController(app){
    
    app.post("/login",async function (request, response){
        const {email, password} = request.body;
        const loginUser = await singUpTable.findOne({where:{email}})
        if(!loginUser || loginUser.password!==md5(password)){
            response.send({message:"Username Or Password DoesNot Match"});
        }
        const token = generateToken(filterUser(loginUser));
        response
        .status(200)
        .send({ token_value: token, userContent: filterUser(loginUser) });
    })
}    

module.exports={
    LogInController,
};
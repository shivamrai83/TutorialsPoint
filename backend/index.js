const express = require("express");
const app = express();
const cors = require('cors');
const db = require("./DB/db");
const { singUpTable } = require("./DB/db");
const PORT = 3008;

//MiddleWare
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200
}));

//Controller
app.get("/data", async function (request, response) {
    const data= await singUpTable.findAll();
    response.send(data);
  });

app.post("/singup",async function (request,response){
    const {fullName, email, password, phone} = request.body;
    const createUser = await singUpTable.create({
        fullName,
        email,
        password,
        phone,
    })
    createUser.save();
    response.send("Done");
})

db.initalise().then(console.log).catch(console.log);
app.listen(PORT,()=>console.log("Server is Running...."));
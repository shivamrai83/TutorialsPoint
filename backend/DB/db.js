const {Sequelize, DataTypes} = require("sequelize");

const dbs = new Sequelize({
    dialect:"postgres",
    host : "localhost",
    username:"visitor",
    port:5432,
    password:"thinksys@123",
    database:"DummyDB",
});
const singUpTable = dbs.define(
    "SingUp",{
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
        },
        fullName:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        },
        phone:{
            type:DataTypes.STRING,
        },
    }
)

const initalise = async function(){
    try{
        await dbs.authenticate();
        await dbs.sync({alter:true});
    }
    catch(e){
        console.log("Here is the Error",error);
    }
}

module.exports={
    initalise,
    singUpTable,
    dbs,
}
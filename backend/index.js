const express = require("express");
const app = express();
const cors = require('cors');
const db = require("./DB/db");
const { singUpTable } = require("./DB/db");
const {singUpController} = require('./Controller/SingUpController')
const {userDataController} = require('./Controller/userData')
const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
require('dotenv').config();

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.KEY;  

//MiddleWare
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200
}));
passport.use(
    new JwtStrategy(options, async function (payload, done) {
      const user = await singUpTable.findOne({ id: payload.id });
  
      if (!user) {
        done(null, false);
      }
      done(null, filterUser(user));
    })
  );
app.use(passport.initialize());


//Controller
singUpController(app);
userDataController(app);

//DB initialization
db.initalise().then(console.log).catch(console.log);

//Port Working
app.listen(3007,()=>console.log("Server is Running...."));
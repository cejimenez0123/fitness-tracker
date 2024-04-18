const express = require("express");
const session = require("express-session")
const passport = require("passport")
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config()
const {setUpPassportLocal}= require("./middleware/authMiddlleware.js")
const app = express();
const PORT = process.env.PORT || 3000
const userRoutes = require('./routes/user.js')
const authMiddleware = passport.authenticate('bearer', { session: false });
app.use(cors())
const logger = (req, _res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`${time} ${req.method}: ${req.url}`);
    next();
    };
    app.use("/user", userRoutes(authMiddleware))
    app.get('/', (req, res, next) => {
    
        res.status(200).json({message:"Hello World"})
    })
setUpPassportLocal(passport);
app.use(
    session({
    secret: process.env.JWT_SECRET,resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    }))
app.use(passport.session());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(logger);


app.use("/user", userRoutes(authMiddleware))





app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
})












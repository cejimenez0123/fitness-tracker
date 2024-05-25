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
const workoutRoutes = require('./routes/workout.js')
const logRoutes = require('./routes/log.js')
const exerciseRoutes = require('./routes/exercise.js')
const activitiesRoutes = require('./routes/activity.js')
const setRoutes = require('./routes/set.js')
const authMiddleware = passport.authenticate('bearer', { session: false });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const logger = (req, _res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`${time} ${req.method}: ${req.url}`);
    next();
    };
    



app.use(logger);
app.use("/user", userRoutes(authMiddleware))
app.use("/activity",activitiesRoutes(authMiddleware))
app.use("/workout",workoutRoutes(authMiddleware)); 
app.use("/log",logRoutes(authMiddleware));
app.use("/exercise",exerciseRoutes(authMiddleware));
app.use("/set",setRoutes(authMiddleware));
app.use(
    session({
    secret: process.env.JWT_SECRET,resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    }))
setUpPassportLocal(passport);
app.use(passport.session());
app.use(passport.initialize());
app.get('/', (req, res, next) => {
    
<<<<<<< HEAD
        res.status(200).json({message:"Hello World"})
        console.log("welcome");
=======
        res.status(200).json({message:"Hello World!"})
>>>>>>> 7ba7bc58609b0ab614800166f6369fd89c812b10
    })




var server = app.listen(PORT,function (){
    console.log(`Listening on ${PORT}`)
    server.close(function() { console.log('Closed Server'); });
});

module.exports = app











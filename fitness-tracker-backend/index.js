const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config()
const {setUpPassportLocal}= require("./middleware/authMiddleware.js")
const app = express();
const PORT = process.env.PORT || 3000









app.listen(PORT, function(){
    console.log(`listening on ${PORT}`)
})












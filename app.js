const express = require('express')
const app = express();
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users")
const User = require("./models/User")
const pets = require("./routes/api/pets")
const Pet = require("./models/Pet")
const bodyParser = require('body-parser')
const passport = require('passport')

mongoose.connect(db,{ useNewUrlParser:true})
.then (()=>console.log("Connected to mongoDB"))
.catch(err => console.log(err))
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./config/passport')(passport);
app.use("/api/users", users)

app.use("/api/pets", pets)

const port = process.env.PORT || 5001;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)})
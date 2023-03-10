const express = require("express");
const morgan = require("morgan");
const app = express()
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const port = 3000;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const requestTime = function (req, res, next) {
    const date = new Date(Date.now())
    console.log(`This request was made: ${date}`)
    next()
  }


//Middleware
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(requestTime)
// app.use(cookieParser())

app.use(cookieSession({
    name: 'user_id',
    keys: ["superSecretKey", "anotherSuperSecretKey"],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

//View engine
app.set("view engine", "ejs")
const users = {
    1: {
        id: 1,
        email: "obiwan@gmail.com",
        password: bcrypt.hashSync("hellothere", saltRounds)
    },
    2: {
        id: 2,
        email: "hodor@gmail.com",
        password: bcrypt.hashSync("hodor", saltRounds)
    },
    3: {
        id: 3,
        email: "dwightSchrute@gmail.com",
        password: bcrypt.hashSync("beets", saltRounds)
    }
}

app.get("/", (req, res)=>{
    // res.cookie("cookieMonster", "ALLTHECOOKIES!")
    // console.log(req)
    const user = users[req.session.user_id]
    let userEmail
    if(user){
        userEmail = user.email
    } else {
        userEmail = false
    }
    const templateVars = {
        userEmail
    }
    res.render("index", templateVars)
})
app.get("/login", (req, res)=>{
    res.render("login");
})
app.post("/login", (req, res)=>{
    const inputtedEmail = req.body.email;
    const inputtedPassword = req.body.password;
    //find the user first
    for(let userId in users){
        if(users[userId].email === inputtedEmail){
            if(bcrypt.compareSync(inputtedPassword, users[userId].password)){
                // res.cookie("user_id", users[userId].id);
                req.session.user_id = users[userId].id;
                res.redirect("/");
                return
            }
        }
    }
    //if a user is found, compare the password
    //If it matches, log them in and reroute to index
})

//This checks if the server is listening
app.listen(port, ()=> {
    console.log("This server isn't broken!")
})

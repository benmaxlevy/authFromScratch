const express = require("express"),
t  app = express(),
  shajs = require("sha.js"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  User = require("./models/user.js");

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/user/register",(req,res)=>{
  let hashedPass = shajs("sha256").update(req.body.pass).digest("hex");
  console.log(hashedPass);
  let user = new User({
    username: req.body.user,
    password: req.body.pass //client needs to hash it before sending to api
  });
  user.save();
  res.end();
});

app.post("/user/login",(req,res)=>{
  let hashedPass = shajs("sha256").update(req.body.pass).digest("hex");
  let allPasses = User.findOne({password:hashedPass},(err,user)=>{
    if(err){
      console.log(err);
    } else {
      if(user != null){
        console.log(user);
        res.cookie("session","active",{maxAge:3600000});
        console.log("cookie has been set");
      }
    }
  })
});

app.listen(3000,(err,suc)=>{
  if(err){
    console.log(err);
  } else {
    console.log("Yay! The app is up on localhost:3000.");
  }
});

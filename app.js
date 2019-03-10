const express = require("express"),
  app = express(),
  shajs = require("sha.js"),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))

//console.log(shajs('sha256').update('hello').digest('hex')); example of hashing the string "hello"


app.listen(3000,(err,suc)=>{
  if(err){
    console.log(err);
  } else {
    console.log("Yay! The app is up on localhost:3000.");
  }
});

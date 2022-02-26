// import express from "express";
const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");


const app = express();
app.use("/", bodyParser.urlencoded({extended:true}));
app.get("/", (req, res)=>{
    // res.write("Hey");
    
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    let first = Number(req.body.num1);
    let second = Number(req.body.num2);
    res.send(`${first+second}`);
})

// app.get("/about-me", (req,res)=> {
//     res.sendFile(__dirname + "/about-me.html");
// })

app.listen(3000, ()=>{
    console.log("My name is Amir and we are listening on port 3000");
})
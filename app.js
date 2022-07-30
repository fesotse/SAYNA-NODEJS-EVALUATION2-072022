const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 3000;


// use of .env
require('dotenv').config();
const { request, response } = require('express');
const connection = require('./public/mysql');


//connection à la base de donnée
connection.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log('Mysql connected successfully');
});


//pour les fichiers statics
app.use("/public",express.static('public'));

//Creation des liens avec les différentes pages
app.get("/avis", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/contact.html')
})
app.get("/home", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/index.html')
})
app.get("/frontend", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/frontend.html')
})
app.get("/backend", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/backend.html')
})
app.get("/marketing", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/marketing.html')
})
app.get("/ux_ui", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/uxui.html')
})
app.get("/sign_up", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/signup.html')
    })
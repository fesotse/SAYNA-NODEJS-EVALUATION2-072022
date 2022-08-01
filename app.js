const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 3000;
var http = require('http');
var fs = require('fs'); 

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
    res.end();
})


app.get("/home", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/index.html')
    let selectAvis = 'SELECT formation, max(avis) FROM contact GROUPED BY formation';
    query = connection.query(selectAvis,[],(err,result)=>{
        if (err) {
            throw err;
        }
        let indexbox = document.querySelector(".flip-box index");
        let contenaire = document.createElement('div');
        contenaire.innerHTML= result;
        indexbox.appendChild.contenaire;
    });
})


app.get("/frontend", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/frontend.html')
    let selectAvis = 'SELECT fname,lname,avis FROM contact where formation="frontend" LIMITE 3';
    query = connection.query(selectAvis,[],(err,result)=>{
        if (err) {
            throw err;
        }
        let indexbox = document.querySelector(".flip-box frontend");
        let contenaire = document.createElement('div');
        contenaire.innerHTML= result;
        indexbox.appendChild.contenaire;
    })
})


app.get("/backend", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/backend.html')
    let selectAvis = 'SELECT fname,lname,avis FROM contact where formation="backend" LIMITE 3';
    query = connection.query(selectAvis,[],(err,result)=>{
        if (err) {
            throw err;
        }
        let indexbox = document.querySelector(".flip-box backend");
        let contenaire = document.createElement('div');
        contenaire.innerHTML= result;
        indexbox.appendChild.contenaire;
    })
})


app.get("/marketing", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/marketing.html')
    let selectAvis = 'SELECT fname,lname,avis FROM contact where formation="marketing" LIMITE 3';
    query = connection.query(selectAvis,[],(err,result)=>{
        if (err) {
            throw err;
        }
        let indexbox = document.querySelector(".flip-box marketing");
        let contenaire = document.createElement('div');
        contenaire.innerHTML= result;
        indexbox.appendChild.contenaire;
    })
})


app.get("/ux_ui", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/uxui.html')
    let selectAvis = 'SELECT fname,lname,avis FROM contact where formation="uxui" LIMITE 3';
    query = connection.query(selectAvis,[],(err,result)=>{
        if (err) {
            throw err;
        }
        let indexbox = document.querySelector(".flip-box uxui");
        let contenaire = document.createElement('div');
        contenaire.innerHTML= result;
        indexbox.appendChild.contenaire;
    })
})


app.get("/sign_up", (req,res)=>{
    res.sendFile(__dirname + '/evaluation_backend/signup.html')
    })

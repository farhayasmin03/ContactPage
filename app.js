const http = require('http');

const request = require('request');
const port = 3000;
var express = require('express');

var app = express();
const bodyParser = require('body-parser');

var ejs = require('ejs');
//var error="";
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render('index')
});
app.post("/",function(req,res){
    // if(req.body.name == "" ) {
    //     error+="Name is blank";
    //     res.send(error);
    //     next();
    // }
    // if(req.body.email == "" ) {
    //     error+="Email is blank";
    //     res.send("error");
        
    // }
    console.log("Blank")

})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
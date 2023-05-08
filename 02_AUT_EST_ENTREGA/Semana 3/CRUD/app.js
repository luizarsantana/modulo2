var express = require ("express");
var app = express();
var port = process.env.PORT || 2222; 
var bodyParser = require('body-parser');
var sqlite3 = require ('sqlite3').verbose();
var DBPATH = 'CRUD';
var db = new sqlite3.Database(DBPATH); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req,res)  
{
    res.header("Access-Control-Allow-Origin", "*") 
    res.send("Botão que mostra um mapa de trilho e tudo mais");
});

app.get("/tudo", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM HABILIDADES`, [], (err, rows)=> 
 
    {
        if (err)
        {
            res.send(err);
        }
            res.send(rows);
    });
});
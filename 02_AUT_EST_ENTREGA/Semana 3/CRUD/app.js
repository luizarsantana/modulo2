var express = require ("express");
var app = express();
var port = process.env.PORT || 2222; 
var bodyParser = require('body-parser');
var sqlite3 = require ('sqlite3').verbose();
var DBPATH = 'CRUD';
var db = new sqlite3.Database(DBPATH); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req,res) // leitura dos dados do banco
{
    res.header("Access-Control-Allow-Origin", "*") 
    res.send("Botão que mostra um mapa de trilho e tudo mais");
});

app.get("/tudo", function(req,res){ // leitura dos dados do banco;
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

app.post("/criarHabilidade", function(req,res){ // adição de dados ao banco;
  res.header("Acess-Control-Allow-Origin", "*");
  db.all(`INSERT INTO habilidades`, [], (err, rows)=>

    {
        if (err)
        {
            res.send(err);
        }
            res.send(rows);
    });
});

app.put("/atualizaHabilidade", function(req,res){ // atualização de dados do banco , app.post ou app.put;
  res.header("Acess-Control-Allow-Origin", "*");
  db.all( `UPDATE habilidades SET WHERE`, [], (err, rows)=> 
 
    {
        if (err)
        {
            res.send(err);
        }
            res.send(rows);
    });
});

app.post("/deletarHabilidade", function(req,res){ // deletação de dados ao banco;
  res.header("Acess-Control-Allow-Origin", "*");
  db.all(`DELETE FROM habilidades WHERE`, [], (err, rows)=> 
 
    {
        if (err)
        {
            res.send(err);
        }
            res.send(rows);
    });
});

app.listen(port, () =>
{
  console.log(`Servidor rodando na porte ${port}`);
});
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
  var id_pessoa = req.body.id_pessoa;
  var habilidade = req.body.habilidade;
  var nivel = req.body.nivel;
  sql = `INSERT INTO habilidades (id_pessoa, habilidade, nivel) VALUES (${id_pessoa}, "${habilidade}", ${nivel})`;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na gravação: "+err);
    } else 
    {
      res.send("Habilidade adicionada!")
    }
  });
});

app.put("/atualizaHabilidade", function(req,res){ // atualização de dados do banco , app.post ou app.put;
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var habilidade = req.body.habilidade;
  var nivel = req.body.nivel;
  sql = `UPDATE habilidades SET `;
  if(req.body.habilidade)
  {
    sql += `habilidade="${habilidade}" `; 
    teste=true;
  }
  if((req.body.nivel)&&(teste==true))
  {
    sql += `,nivel=${nivel} `;
  }else{
    sql += `nivel=${nivel} `;
  }
  sql += ` WHERE id_pessoa=${id_pessoa} `;
  // para atualizar um dado específico é so chamar apenas esse dado, ex: `UPDATE habilidades SET nivel=${nivel} WHERE id_pessoa=${id_pessoa}`;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na atualização: "+err);
    } else 
    {
      res.send("Habilidade atualizada!")
    }
  });
});

app.post("/deletarHabilidade", function(req,res){ // deletação de dados ao banco;
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var habilidade = req.body.habilidade;
  var nivel = req.body.nivel;
  sql = `DELETE FROM habilidades WHERE id_pessoa=${id_pessoa} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na deletação: "+err);
    } else 
    {
      res.send("Habilidade deletada!")
    }
  });
});

app.listen(port, () =>
{
  console.log(`Servidor rodando na porte ${port}`);
});
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

app.get('/habilidades', (req, res) => {
    const query = 'SELECT * FROM habilidades';
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Erro ao buscar habilidades');
      } else {
        res.status(200).json(result);
      }
    });
  });
  
app.get('/pessoa/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM habilidades WHERE id = ${id}`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Erro ao buscar habilidade');
      } else if (result.length === 0) {
        res.status(404).send('Habilidade não encontrada');
      } else {
        res.status(200).json(result[0]);
      }
    });
  });
  
app.post('/habilidades', (req, res) => {
    const { name, level } = req.body;
    const query = `INSERT INTO habilidades (habilidade, nivel) VALUES ('${habilidade}', '${nivel}')`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Erro ao adicionar habilidade');
      } else {
        res.status(201).send('Habilidade adicionada com sucesso');
      }
    });
  });
  
app.put('/pessoa/:id', (req, res) => {
    const id = req.params.id;
    const { name, level } = req.body;
    const query = `UPDATE habilidades SET habilidade = '${habilidade}', nivel = '${nivel}' WHERE id = ${id}`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Erro ao atualizar habilidade');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Habilidade não encontrada');
      } else {
        res.status(200).send('Habilidade atualizada com sucesso');
      }
    });
  });
  
  app.delete('/pessoa/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM habilidades WHERE id = ${id}`;
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Erro ao excluir habilidade');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Habilidade não encontrada');
    }
});
});
 
app.listen(port, () =>

{
    console.log(`Servidor rodando na porta ${port}`);
})
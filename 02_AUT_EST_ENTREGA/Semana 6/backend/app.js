var express = require ("express");
var app = express();
var port = process.env.PORT || 2222; 
var bodyParser = require('body-parser');
var sqlite3 = require ('sqlite3').verbose();
var DBPATH = 'CRUD]_completo';
var db = new sqlite3.Database(DBPATH); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
e
app.get("/", function(req,res) // leitura dos dados do banco
{
    res.header("Access-Control-Allow-Origin", "*") 
    res.send("Estou rodando aqui!");
});

app.get("/tudo", function(req,res){ 
  res.header("Access-Control-Allow-Origin", "*");
  db.all(`SELECT * FROM usuarios`, [], (err, rows)=> 

  {
      if (err)
      {
          res.send(err);
      }
          res.send(rows);
  });
});

app.post("/criarUsuarios", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var nome = req.body.nome;
  var email = req.body.email;
  var idade = req.body.idade;
  sql = `INSERT INTO usuarios (id_pessoa, nome, email, idade) VALUES (${id_pessoa}, "${nome}", "${email}", ${idade})`;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na gravação: "+err);
    } else 
    {
      res.send("Usuário adicionado!")
    }
  });
});

app.put("/atualizaUsuarios", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var nome = req.body.nome;
  var email = req.body.email;
  var idade = req.body.idade;
  sql = `UPDATE usuarios SET `;
  if(req.body.nome)
  {
    sql += `nome="${nome}" `; 
    teste=true;
  }
  if((req.body.email)&&(teste==true))
  {
    sql += `,email=${email} `;
  }else{
    sql += `email=${email} `;
  }
  if((req.body.idade)&&(teste==true))
  {
    sql += `,idade=${idade} `;
  }else{
    sql += `idade=${idade} `;
  }
  sql += ` WHERE id_pessoa=${id_pessoa} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na atualização: "+err);
    } else 
    {
      res.send("Usuário atualizado!")
    }
  });
});

app.delete("/deletarUsuarios", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var nome = req.body.nome;
  var email = req.body.email;
  var idade = req.body.idade;
  sql = `DELETE FROM usuarios WHERE id_pessoa=${id_pessoa} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na deletação: "+err);
    } else 
    {
      res.send("Usuário deletado!")
    }
  });
});

app.get("/tudo", function(req,res){ // leitura dos dados do banco;
  res.header("Access-Control-Allow-Origin", "*");
  db.all(`SELECT * FROM habilidades`, [], (err, rows)=> 

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

app.delete("/deletarHabilidade", function(req,res){ // deletação de dados ao banco;
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

app.get("/tudo", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM formacao`, [], (err, rows)=> 
 
    {
        if (err)
        {
            res.send(err);
        }
            res.send(rows);
    });
});

app.post("/criarFormacao", function(req,res){
  res.header("Acess-Control-Allow-Origin", "*");
  var id_instituicao = req.body.id_instituicao;
  var instituicao = req.body.instituicao;
  var curso = req.body.curso;
  sql = `INSERT INTO formacao (id_instituicao, instituicao, curso) VALUES (${id_instituicao}, "${instituicao}", "${curso}")`;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na gravação: "+err);
    } else 
    {
      res.send("Formação adicionada!")
    }
  });
});

app.put("/atualizaFormacao", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_instituicao = req.body.id_instituicao;
  var instituicao = req.body.instituicao;
  var curso = req.body.curso;
  sql = `UPDATE formacao SET `;
  if(req.body.instituicao)
  {
    sql += `instituicao="${instituicao}" `; 
    teste=true;
  }
  if((req.body.curso)&&(teste==true))
  {
    sql += `,curso=${curso} `;
  }else{
    sql += `curso=${curso} `;
  }
  sql += ` WHERE id_instituicao=${id_instituicao} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na atualização: "+err);
    } else 
    {
      res.send("Formação atualizada!")
    }
  });
});

app.delete("/deletarFormacao", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_instituicao = req.body.id_instituicao;
  var instituicao = req.body.instituicao;
  var curso = req.body.curso;
  sql = `DELETE FROM formacao WHERE id_instituicao=${id_instituicao} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na deletação: "+err);
    } else 
    {
      res.send("Formação deletada!")
    }
  });
});

app.get("/tudo", function(req,res){ 
  res.header("Access-Control-Allow-Origin", "*");
  db.all(`SELECT * FROM experiencia`, [], (err, rows)=> 

  {
      if (err)
      {
          res.send(err);
      }
          res.send(rows);
  });
});

app.post("/criarExperiencia", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var id_empresa = req.body.id_empresa;
  var empresa = req.body.empresa;
  var cargo = req.body.cargo;
  sql = `INSERT INTO experiencia (id_pessoa, id_empresa, empresa, cargo) VALUES (${id_pessoa}, ${id_empresa}, "${empresa}", "${cargo}")`;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na gravação: "+err);
    } else 
    {
      res.send("UExperiência adicionada!")
    }
  });
});

app.put("/atualizaExperiencia", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var id_empresa = req.body.id_empresa;
  var empresa = req.body.empresa;
  var cargo = req.body.cargo;
  sql = `UPDATE experiencia SET `;
  if(req.body.empresa)
  {
    sql += `empresa="${empresa}" `; 
    teste=true;
  }
  if((req.body.cargo)&&(teste==true))
  {
    sql += `,cargo=${cargo} `;
  }else{
    sql += `cargo=${cargo} `;
  }
  sql += ` WHERE id_pessoa=${id_pessoa} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na atualização: "+err);
    } else 
    {
      res.send("Experiência atualizada!")
    }
  });
});

app.delete("/deletarExperiencia", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_pessoa = req.body.id_pessoa;
  var nome = req.body.nome;
  var email = req.body.email;
  var idade = req.body.idade;
  sql = `DELETE FROM experiencia WHERE id_pessoa=${id_pessoa} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na deletação: "+err);
    } else 
    {
      res.send("Experiência deletada!")
    }
  });
});

app.get("/tudo", function(req,res){ 
  res.header("Access-Control-Allow-Origin", "*");
  db.all(`SELECT * FROM certificados`, [], (err, rows)=> 

  {
      if (err)
      {
          res.send(err);
      }
          res.send(rows);
  });
});

app.post("/criarCertificados", function(req,res){
  res.header("Acess-Control-Allow-Origin", "*");
  var id_instituicao = req.body.id_instituicao;
  var id_pessoa = req.body.id_pessoa;
  var certificacao = req.body.certificacao;
  sql = `INSERT INTO certificados (id_instituicao, id_pessoa, certificacao) VALUES (${id_instituicao}, ${id_pessoa},"${certificacao}")`;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na gravação: "+err);
    } else 
    {
      res.send("Certificado adicionado!")
    }
  });
});

app.put("/atualizaCertificados", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_instituicao = req.body.id_instituicao;
  var id_pessoa = req.body.id_pessoa;
  var certificacao = req.body.certificacao;
  sql = `UPDATE formacao SET `;
  if(req.body.id_instituicao)
  {
    sql += `id_instituicao="${id_instituicao}" `; 
    teste=true;
  }
  if((req.body.certificacao)&&(teste==true))
  {
    sql += `,certificacao=${certificacao} `;
  }else{
    sql += `certificacao=${certificacao} `;
  }
  sql += ` WHERE id_pessoa=${id_pessoa} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na atualização: "+err);
    } else 
    {
      res.send("Certificado atualizado!")
    }
  });
});

app.delete("/deletarCetificados", function(req,res){ 
  res.header("Acess-Control-Allow-Origin", "*");
  var id_instituicao = req.body.id_instituicao;
  var id_pessoa = req.body.id_pessoa;
  var certificacao = req.body.certificacao;
  sql = `DELETE FROM certificados WHERE id_instituicao=${id_instituicao} `;
  db.all(sql, [], (err, rows)=>
  {
    if(err)
    {
        res.send("Erro na deletação: "+err);
    } else 
    {
      res.send("Certificado deletado!")
    }
  });
});

app.listen(port, () =>
{
  console.log(`Servidor rodando na porte ${port}`);
});
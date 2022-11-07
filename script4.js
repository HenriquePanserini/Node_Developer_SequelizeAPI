const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "C:\Users\rick4\Desktop\curso node.js\index.html");
});

app.get("/sobre",function(res, res){
    res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Seja bem-vindo ao meu blog");
});

app.get("/hello/:cargo/:nome", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>");
    res.send("<h2>Seu cargo é: " + req.params.cargo + "</h2>");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});
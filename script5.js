const Sequelize = require('sequelize');
const sequelize =  new Sequelize('teste','root','6558', {
    host: "localhost",
    dialect: "mysql"
});

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
     conteudo: {
        type: Sequelize.TEXT
     }
});

postagem.create({
    titulo: "Cadastro Individual",
    conteudo: "Cadastro de usuarios e dados pessoais"
});

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING 
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }

});


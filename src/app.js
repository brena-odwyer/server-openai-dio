const express =require("express"); // importando a biblioteca/dependencia no node
const cors = require("cors"); // importando o cors
const routes = require("./routes/routes") // importa as rotas

require("dotenv").config(); // importando o que estiver dentro do dotenv

const app = express(); // dizendo que isso é uma aplicação express

app.use(express.json()); //dizendo que vai usar json
app.use(cors());
app.use(routes) // falando pro app usar as rotas

module.exports = app

// tudo que a aplicação vai usar está neste arquivo
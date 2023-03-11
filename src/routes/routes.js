const express = require("express");
const promptController = require("../controllers/prompt-controller");

const routes = express.Router() // estamos usando o express pras rotas

routes.post('/api/prompt', promptController.sendText) // a rota apontando pro controller

module.exports = routes

//http://localhost:9893/api/prompt
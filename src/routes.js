const express = require("express");
const routes = express.Router();
const userController = require("./controllers/UserController");

routes.get('/users', userController.list);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;
const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");
const routes = express.Router();

routes.get('/users', async (req, res) => {
    const users = await connection("users").select("*");
    res.json(users);
});

routes.post('/users', async (req, res) => {
    const {nome, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    const created_at = new Date().toUTCString();
    await connection("users").insert(
        {
            id,
            nome,
            email,
            idade,
            empresa,
            created_at,
        }
    );
});

module.exports = routes;
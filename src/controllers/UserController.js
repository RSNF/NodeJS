const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
    async list(req, res) {
        const users = await connection('users').select("*");

        return res.json(users);
    },
    async show(req, res) {
        const { id } = req.params;
        const user = await connection('users').where("id", id).select("*");

        return res.json(user);
    },
    async create(req, res) {
        const { nome, email, idade, empresa } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const created_at = new Date().toUTCString();
        const updated_at = new Date().toUTCString();
        await connection("users").insert(
            {
                id,
                nome,
                email,
                idade,
                empresa,
                created_at,
                updated_at
            }
        );

        return res.json({ id });
    },
    async update(req, res) {
        const { id } = req.params;
        const { nome, email, idade, empresa } = req.body;
        const updated_at = new Date().toUTCString();
        await connection("users").where("id", id).update(
            {
                id,
                nome,
                email,
                idade,
                empresa,
                updated_at
            }
        );

        return res.status(204).send();
    },
    async delete(req, res) {
        const { id } = req.params;
        await connection("users").where("id", id).delete();

        return res.status(204).send();
    }
}
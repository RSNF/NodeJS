const crypto = require("crypto");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: crypto.randomBytes(4).toString('HEX'), nome: 'Fulano', email: 'Fulano@email.com', created_at: new Date().toUTCString()},
    {id: crypto.randomBytes(4).toString('HEX'), nome: 'Beltrano', email: 'Beltrano@email.com', created_at: new Date().toUTCString()},
    {id: crypto.randomBytes(4).toString('HEX'), nome: 'Sicrano', email: 'Sicrano@email.com', created_at: new Date().toUTCString()}
  ]);
};

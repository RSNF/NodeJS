/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table) {
        table.string("id").primary();
        table.string("nome").notNullable();
        table.string("email").notNullable();
        table.integer("idade");
        table.string("empresa");
        table.timestamp("created_at");
        table.timestamp("updated_at");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
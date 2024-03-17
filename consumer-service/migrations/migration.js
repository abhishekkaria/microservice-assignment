// Define your table schema using Knex.js migrations
exports.up = function(knex) {
    return knex.schema.createTable('employee', function(table) {
        table.increments('id').primary(); // Auto-incrementing ID field
        table.string('name');
        table.string('phone');
        table.string('email');
        table.string('company');
      
        table.timestamps(true, true); // Adds created_at and updated_at fields
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('employee');
};
  
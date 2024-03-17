// db/seeds/employees.js
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('employee').del()
      .then(function () {
        // Inserts seed entries
        return knex('employee').insert([
          {name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', company: 'ABC Corp'},
          {name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', company: 'XYZ Inc'},
          // Add more sample data as needed
        ]);
      });
};  
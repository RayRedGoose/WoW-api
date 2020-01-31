exports.up = function(knex) {
  return knex.schema.table('raceClasses', function(table) {
        table.increments('id').primary();
    });
};

exports.down = function(knex) {
  knex.schema.table('raceClasses', function(table) {
    table.dropColumn('id');
  });
};

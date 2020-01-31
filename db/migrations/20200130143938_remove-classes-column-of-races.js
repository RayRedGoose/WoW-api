exports.up = function(knex) {
  return knex.schema.table('races', function(table) {
        table.dropColumn('classes');
    });
};

exports.down = function(knex) {
  knex.schema.table('races', function(table) {
    table.string('classes');
  });
};

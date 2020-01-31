exports.up = function(knex) {
  return knex.schema
    .createTable('raceClasses', function (table) {
      table.integer('race_id').unsigned()
      table.foreign('race_id')
        .references('races.id');
      table.integer('class_id').unsigned()
      table.foreign('class_id')
        .references('classes.id');
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {

};

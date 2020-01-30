exports.up = function(knex) {
  return knex.schema
    .createTable('races', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('faction');
      table.string('race_symbol');
      table.string('race_image');
      table.text('description');
      table.text('history');
      table.string('starting_zone');
      table.string('home_city');
      table.string('leader');
      table.string('mount');
      table.string('classes');
      table.timestamps(true, true);
    })
    .createTable('classes', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('symbol');
      table.timestamps(true, true);
    })
    .createTable('weapons', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.integer('damage');
      table.integer('class_id').unsigned()
      table.foreign('class_id')
        .references('classes.id');
      table.timestamps(true, true);
    })
    .createTable('characters', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('race_id').unsigned()
      table.foreign('race_id')
        .references('races.id');
      table.integer('class_id').unsigned()
      table.foreign('class_id')
        .references('classes.id');
      table.integer('weapon_id').unsigned()
      table.foreign('weapon_id')
        .references('weapons.id');
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('races')
    .dropTable('classes')
    .dropTable('weapons')
    .dropTable('characters')
};

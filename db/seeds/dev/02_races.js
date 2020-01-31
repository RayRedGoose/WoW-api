const racesData = require('../../../data/races');

const getAllClasses = async (knex, classes, raceID) => {
  const classesPromises = await classes.map(async (classEl) => {
    const el = await knex('classes').where({name: classEl}).returning('id');

    return knex('raceClasses').insert({
      race_id: raceID,
      class_id: el[0].id
    });
  });
  return Promise.all(classesPromises);
}

exports.seed = async (knex) => {
  try {
    await knex('races').del();
    await knex('raceClasses').del();

    let racesPromises = racesData.map(async (race) => {
      const { name, race_image, race_symbol, faction, description, history, starting_zone, home_city, leader, mount } = race;

      const raceID = await knex('races').insert({ name, race_image, race_image, faction, description, history, starting_zone, home_city, leader, mount }, 'id');

      getAllClasses(knex, race.classes, raceID[0]);
    });

    return Promise.all(racesPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

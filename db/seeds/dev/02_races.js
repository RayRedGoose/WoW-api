const racesData = require('../../../data/races');

const getAllClasses = async (knex, race) => {
  const classes = await race.classes.map(async (classEl) => {
    const el = await knex('classes').where({name: classEl}).returning('id');
    return el[0]['id']
  });

  return Promise.all(classes);
}

exports.seed = async (knex) => {
  try {
    await knex('races').del();

    let racesPromises = racesData.map(async (race) => {
      const allClasses = await getAllClasses(knex, race);
      return knex('races').insert({...race, classes: JSON.stringify(allClasses)});
    });
    return Promise.all(racesPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

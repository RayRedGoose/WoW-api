const classesData = require('../../../data/classes');

exports.seed = async (knex) => {
  try {
    await knex('classes').del()

    let classesPromises = classesData.map(item => {
      return knex('classes').insert(item);
    });

    return Promise.all(classesPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

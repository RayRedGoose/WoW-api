const weaponsData = require('../../../data/weapons');

const getClassID = async (knex, weapon) => {
  const className = await knex('classes').where({
    name: weapon.class
  }).returning('id');
  return className[0]['id'];
}

const createWeapon = async (knex, weapon) => {
  const classID = await getClassID(knex, weapon);

  return knex('weapons').insert({
    name: weapon.name,
    type: weapon.type,
    damage: weapon.damage,
    class_id: classID
  });
}

exports.seed = async (knex) => {
  try {
    await knex('weapons').del()

    let weaponsPromises = weaponsData.map(weapon => {
      return createWeapon(knex, weapon);
    });

    return Promise.all(weaponsPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

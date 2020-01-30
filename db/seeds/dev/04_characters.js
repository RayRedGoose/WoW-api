const charactersData = require('../../../data/characters');

const createCharacter = async (knex, character) => {
  const raceID = await getRaceID(knex, character);
  const classID = await getClassID(knex, character);
  const weaponID = await getWeaponID(knex, character);

  return knex('characters').insert({
    name: character.name,
    race_id: raceID,
    class_id: classID,
    weapon_id: weaponID
  });
}

const getRaceID = async (knex, character) => {
  const race = await knex('races')
    .where({name: character.race})
    .returning('id');
  return race[0]['id'];
}

const getClassID = async (knex, character) => {
  const className = await knex('classes')
    .where({name: character.className})
    .returning('id');
  return className[0]['id'];
}

const getWeaponID = async (knex, character) => {
  const weapon = await knex('weapons')
    .where({name: character.weapon})
    .returning('id');
  return weapon[0]['id'];
}

exports.seed = async (knex) => {
  try {
    await knex('characters').del()

    let charactersPromises = charactersData.map(character => {
      return createCharacter(knex, character);
    });

    return Promise.all(charactersPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

const express = require('express');
const cors = require('cors');
const app = express();
  var bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.set('port', process.env.PORT || 3001);

app.get('/api/v1/races', async (request, response) => {
  try {
    const races = await database('races').select();
    response.status(200).json(races);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/races/:id', async (request, response) => {
  try {
    const races = await database('races').where('id', request.params.id).select();
    const [ race ] = races
    if (!races.length) {
      return response.status(404).json({
        error: `Could not find race with id ${request.params.id}`
      });
    }
    return response.status(200).json(race);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/races/:id/classes', async (request, response) => {
  try {
    const raceClasses = await database('raceClasses').where('race_id', request.params.id).select();

    if (!raceClasses.length) {
      return response.status(404).json({
        error: `Could not find any class for this race`
      });
    }

    const classes = await getClasses(raceClasses);

    return response.status(200).json(classes);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

function getClasses(raceClasses) {
  const classesPromises = raceClasses.map(async (el) => {
    const elems = await database('classes').where('id', el.class_id).select();
    return elems[0];
  });
  return Promise.all(classesPromises);
}

app.get('/api/v1/faction/:name', async (request, response) => {
  try {
    const races = await database('races').where('faction', request.params.name).select();
    if (races.length) {
      response.status(200).json(races);
    } else {
      response.status(404).json({
        error: `Could not find any race from ${request.params.name}`
      });
    }
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/classes', async (request, response) => {
  try {
    const classes = await database('classes').select();
    response.status(200).json(classes);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/classes/:id', async (request, response) => {
  try {
    const classes = await database('classes').where('id', request.params.id).select();
    const [ singleClass ] = classes
    if (!classes.length) {
      return response.status(404).json({
        error: `Could not find class with id ${request.params.id}`
      });
    }
    return response.status(200).json(singleClass);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/characters', async (request, response) => {
  try {
    const characters = await database('characters').select();
    response.status(200).json(characters);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/characters/:id', async (request, response) => {
  try {
    const characters = await database('characters').where('id', request.params.id).select();
    const [ character ] = characters
    if (!characters.length) {
      return response.status(404).json({
        error: `Could not find class with id ${request.params.id}`
      });
    }
    return response.status(200).json(character);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/weapons', async (request, response) => {
  try {
    const weapons = await database('weapons').select();
    response.status(200).json(weapons);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/weapons/:id', async (request, response) => {
  try {
    const weapons = await database('weapons').where('id', request.params.id).select();
    const [ weapon ] = weapons
    if (!weapons.length) {
      return response.status(404).json({
        error: `Could not find class with id ${request.params.id}`
      });
    }
    return response.status(200).json(weapon);
  }
  catch(error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/characters', async (request, response) => {
  const character = request.body;

  for (let requiredParameter of ['name', 'race_id', 'class_id', 'weapon_id']) {
    if (!character[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, race_id: <Number>, class_id: <Number>, weapon_id: <Number> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  response.status(201).json({ character })

  try {
    const id = await database('characters').insert(character, 'id');
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/races', async (request, response) => {
  const race = request.body;
  const properties = ['name', 'faction', 'race_symbol', 'race_image', 'description', 'history', 'starting_zone', 'home_city', 'leader', 'mount', 'classes']

  for (let requiredParameter of properties) {
    if (!race[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {
          name: <String>,
          faction: <String>,
          race_symbol: <String>,
          race_image: <String>,
          description: <String>,
          history: <String>,
          starting_zone: <String>,
          home_city: <String>,
          leader: <String>,
          mount: <String>,
          classes: <String>
        }. You're missing a "${requiredParameter}" property.` });
    }
  }

  response.status(201).json({ race })

  try {
    const id = await database('races').insert(race, 'id');
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}.`);
});

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

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}.`);
});

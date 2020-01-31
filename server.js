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

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}.`);
});

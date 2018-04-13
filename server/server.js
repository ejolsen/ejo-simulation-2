const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const controller = require('./controller');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
app.use(cors())


app.get('/api/houses', controller.getAllHouses);
app.post('/api/posthouse', controller.createHouse);

massive(process.env.CONNECTION_STRING).then( connectionDB => { 
    app.set('db', connectionDB); 
    const port = process.env.PORT || 8008
    app.listen(port, () => console.log(` Mr. Roboto is tuned to ${port}`));
});
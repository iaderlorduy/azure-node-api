// const gameRouter = require('./routes/gameRouter');
import gameRouter from './routes/gameRouter';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-unused-vars
  const db = mongoose.connect('mongodb://root:abc123@ds231242.mlab.com:31242/god', {
    useNewUrlParser: true,
  });
} else {
  console.log('this is a test');
  // eslint-disable-next-line no-unused-vars
  const db = mongoose.connect('mongodb://root:abc123@ds261277.mlab.com:61277/godtest', {
    useNewUrlParser: true,
  });
}
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', gameRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// agregar middleware para el manejo de las excepciones

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;

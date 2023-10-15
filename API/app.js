const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const packageRoutes = require('./routes/packageRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/BC');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

app.use(bodyParser.json());

app.use('/api/packages', packageRoutes);
app.use('/api/deliveries', deliveryRoutes);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
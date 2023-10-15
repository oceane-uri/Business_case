
const mongoose = require('mongoose');
import {ObjetctId} from "mongoose"; 

mongoose.connect('mongodb://localhost:27017/BC', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});


// const { MongoClient, Db } = require("mongodb");

// let client = null;

// function connect(url, callback) {
//   if (client === null) {
//     client = new MongoClient(url);

//     client.connect((err) => {
//       if (err) {
//         client = null;
//         callback(err);
//       } else {
//         callback();
//       }
//     });
//   } else {
//     callback();
//   }
// }

// function db() {
//   var db = new Db(client, "dbOK");
//   return db;
// }

// function fermer() {
//   if (client) {
//     client.close();
//     client = null;
//   }
// }

// module.exports = { connect, client, db, fermer };

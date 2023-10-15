const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const packageSchema = new mongoose.Schema({
    package_id: {
        type: String,
        default: uuidv4, // Utilisation de la fonction uuidv4 pour générer un identifiant unique
        unique: true
    },
    active_delivery: {
        type: String,
        default: uuidv4, // Utilisation de la fonction uuidv4 pour générer un identifiant unique
        unique: true
    },
    description: String,
    weight: Number,
    width: Number,
    height: Number,
    from_location: {
        lat: Number,
        lng: Number
    },
    to_location: {
        lat: Number,
        lng: Number
    }
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;

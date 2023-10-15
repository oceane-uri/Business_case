const mongoose = require('mongoose');
const {
    v4: uuidv4
} = require('uuid');

const deliverySchema = new mongoose.Schema({
    delivery_id: {
        type: String,
        default: uuidv4, // Utilisation de la fonction uuidv4 pour générer un identifiant unique
        unique: true
    },
    package_id: {
        type: String,
        ref: 'Package' // Référence au modèle Package
    },
    pickup_time: Date,
    start_time: Date,
    end_time: Date,
    location: {
        lat: Number,
        lng: Number
    },
    status: {
        type: String,
        enum: ['open', 'picked-up', 'in-transit', 'delivered', 'failed']
    }
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

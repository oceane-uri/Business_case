const mongoose = require('mongoose');

const {
    v4: uuidv4
} = require('uuid');

const deliverySchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4 // Utilisation de la fonction uuidv4 pour générer un identifiant unique 
    },

    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'package' // Référence au modèle Package
    },
    pickup_time: { type:Date, default: null},
    start_time:  { type:Date, default: null},
    end_time: { type:Date, default: null},
    location: {
        lat: Number,
        lng: Number
    },
    status: {
        type: String,
        enum: ['open', 'picked-up', 'in-transit', 'delivered', 'failed']
    }
});

deliverySchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.delivery_id = _id;
    return object;
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

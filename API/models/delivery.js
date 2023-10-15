const mongoose = require('mongoose');
const {
    UUID
} = require('bson');
// import { UUID } from 'mongodb';
// import Uuid from 'uuid';


const deliverySchema = new mongoose.Schema({
    delivery_id: {
        type: UUID,
        required: true
    },
    package_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
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
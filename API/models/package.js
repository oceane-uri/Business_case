const mongoose = require('mongoose');
// import Uuid from 'uuid';
const {
    UUID
} = require('bson');

const packageSchema = new mongoose.Schema({
    package_id: {
        type: UUID,
        required: true
    },
    active_delivery_id: {
        type: UUID,
        required: true
    },
    description: String,
    weight: Number,
    width: Number,
    height: Number,
    depth: Number,
    from_name: String,
    from_adress: String,
    from_location: {
        lat: Number,
        lng: Number
    },
    to_name: String,
    to_adress: String,
    to_location: {
        lat: Number,
        lng: Number
    },


});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
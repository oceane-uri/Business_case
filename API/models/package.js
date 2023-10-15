const mongoose = require('mongoose');
const Delivery = require('./delivery');

const {
    v4: uuidv4
} = require('uuid');

const packageSchema = new mongoose.Schema({
    
    _id: {
        type: String,
        default: uuidv4 // Utilisation de la fonction uuidv4 pour générer un identifiant unique
    },
    active_delivery_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery', defaukt:null },

    description: String,
    weight: Number,
    width: Number,
    height: Number,
    depth: Number,
    from_name: String,
    from_address: String,
    from_location: {
        lat: Number,
        lng: Number
    },
    to_name: String,
    to_address: String,
    to_location: {
        lat: Number,
        lng: Number
    },
    deliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' }],
});

packageSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.package_id = _id;
    return object;
});

// Middleware pour créer automatiquement un delivery lors de la création d'un package
// Avec ce middleware, chaque fois qu'un nouveau package est créé, un nouveau delivery avec un statut "open" est également créé automatiquement.
packageSchema.pre('save', async function (next) {
    const package = this;

    const deliveryData = {
        "location": package.to_location,
        "status":"open"      
    }
  
    // Créer un nouveau delivery avec un statut "open"
    const delivery = new Delivery(deliveryData);
    const savedDelivery = await delivery.save();
  
    // Lier le delivery créé au package
    package.deliveries.push(savedDelivery);
    package.active_delivery_id = savedDelivery;
   // savedDelivery.package = package;
    next();
  });

  
  
  

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;

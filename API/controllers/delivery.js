const Delivery = require('../models/delivery');

// Récupérer tous les livraisons
exports.getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find();
        res.json(deliveries);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Créer une nouvelle livraison
exports.createDelivery = async (req, res) => {
    const nouvelleDelivery = new Delivery(req.body);

    try {
        const delivery = await nouvelleDelivery.save();
        res.status(201).json(delivery);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Récupérer une livraison par son ID
exports.getDeliveryById = async (req, res) => {
    res.json(res.delivery);
};

// Mettre à jour une livraison par son ID
exports.updateDelivery = async (req, res) => {
    if (req.body.delivery_id != null) {
        res.delivery.delivery_id = req.body.delivery_id;
    }

    // ... Ajouter d'autres propriétés à mettre à jour ici ...

    try {
        const updatedDelivery = await res.delivery.save();
        res.json(updatedDelivery);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Supprimer une livraison par son ID
exports.deleteDelivery = async (req, res) => {
    try {
        await res.delivery.remove();
        res.json({
            message: 'Livraison supprimée'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
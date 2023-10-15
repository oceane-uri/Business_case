const mongoose = require('mongoose');
const Delivery = require('../models/delivery');
const Package = require('../models/package');

// Récupérer tous les livraisons
exports.getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find().populate('package');
        res.json(deliveries);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Créer une nouvelle livraison
exports.createDelivery = async (req, res) => {

    //Package.findById(req.body.package_id)
    const parckage_id= await Package.findById(req.body.package_id).populate('_id')
    .then(async parckage_id => {
      if (!parckage_id)
        res.status(404).send({message: `Package d'id = ${req.body.package_id} non trouvé.`});
      else 
      {

        const deliveryData = {
            "location": req.body.location,
            "status":req.body.status,
            //"package":new  mongoose.Schema.Types.ObjectId(parckage_id)
        }

        const nouvelleDelivery = new Delivery(deliveryData);

        try {
            const delivery =  await nouvelleDelivery.save();
            res.status(201).json(delivery);    
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }

        
      }
      
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: err.message});
    });

};

// Récupérer une livraison par son ID
exports.getDeliveryById = async (req, res) => {
    const id = req.params.id;
    Delivery.findById(id).populate('package')
      .then(delivery => {
        if (!delivery)
          res.status(404).send({message: `Livraison d'id = ${id} non trouvé.`});
        else res.status(200).json(delivery);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Erreur lors de la récupération de la livraison d'id = " + id });
      });
};

// Mettre à jour une livraison par son ID
exports.updateDelivery = async (req, res) => {

    const id = req.params.id;

    Delivery.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(delivery => {
      if (!delivery) {
        res.status(404).send({
          message: `Livraison d'id = ${id} non trouvé.`
        });
      } else res.send({message: `Livraison d'id = ${id} modifié avec succès.`});
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la modification de la livraison d'id = " + id
      });
    });
};

// Supprimer une livraison par son ID
exports.deleteDelivery = async (req, res) => {

    const id = req.params.id;

    Delivery.findByIdAndRemove(id)
    .then(delivery => {
      if (!delivery) {
        res.status(404).send({
          message: `Livraison d'id = ${id} non trouvé`
        });
      } else {
        res.send({
          message: "Livraison supprimé"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer la livraison d'id " + id
      });
    });
};
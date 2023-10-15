const Package = require('../models/package');
const Delivery = require('../models/delivery');

const CreatePackageDTO = require('../dto/createPackage');

// Récupérer tous les packages
exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Créer un nouveau package
exports.createPackage = async (req, res) => {


    const nouveauPackage = new Package(req.body);

    try {
        const package = await nouveauPackage.save();
        res.status(201).json(package);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Récupérer un package par son ID
exports.getPackageById = async (req, res) => {
    const id = req.params.id;
    Package.findById(id)
      .then(package => {
        if (!package)
          res.status(404).send({message: `Package d'id = ${id} non trouvé.`});
        else res.status(200).json(package);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Erreur lors de la récupération du package d'id = " + id });
      });
};

// Mettre à jour un package par son ID
exports.updatePackage = async (req, res) => {

    const id = req.params.id;

    Package.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(package => {
      if (!package) {
        res.status(404).send({
          message: `Package d'id = ${id} non trouvé.`
        });
      } else res.send({message: `Package d'id = ${id} modifié avec succès.`});
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la modification du package d'id = " + id
      });
    });
};

// Supprimer un package par son ID
exports.deletePackage = async (req, res) => {

    const id = req.params.id;

    Package.findByIdAndRemove(id)
    .then(package => {
      if (!package) {
        res.status(404).send({
          message: `Packaged'id = ${id} non trouvé`
        });
      } else {
        res.send({
          message: "Package supprimé"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer le package d'id " + id
      });
    });

};
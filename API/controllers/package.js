const Package = require('../models/package');
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
    const packageDTO = new CreatePackageDTO(req.body);
    const nouveauPackage = new Package()
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
    res.json(res.package);
};

// Mettre à jour un package par son ID
exports.updatePackage = async (req, res) => {
    if (req.body.package_id != null) {
        res.package.package_id = req.body.package_id;
    }

    if (req.body.active_delivery != null) {
        res.package.active_delivery = req.body.active_delivery;
    }

    // ... Ajouter d'autres propriétés à mettre à jour ici ...

    try {
        const updatedPackage = await res.package.save();
        res.json(updatedPackage);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Supprimer un package par son ID
exports.deletePackage = async (req, res) => {
    try {
        await res.package.remove();
        res.json({
            message: 'Package supprimé'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
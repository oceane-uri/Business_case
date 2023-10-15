const express = require('express');
const packageController = require('../controllers/package');
const router = express.Router();

router.get('/', packageController.getAllPackages);
router.post('/', packageController.createPackage);

router.param('id', async (req, res, next, id) => {
    try {
        const package = await Package.findById(id);
        if (!package) {
            return res.status(404).json({
                message: 'Package non trouvé'
            });
        }
        res.package = package;
        next();
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get('/:id', packageController.getPackageById);
router.patch('/:id', packageController.updatePackage);
router.delete('/:id', packageController.deletePackage);

module.exports = router;
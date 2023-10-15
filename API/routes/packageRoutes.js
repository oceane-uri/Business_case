const express = require('express');
const packageController = require('../controllers/package');
const router = express.Router();

router.get('/', packageController.getAllPackages);
router.post('/', packageController.createPackage);
router.get('/:id', packageController.getPackageById);
router.patch('/:id', packageController.updatePackage);
router.delete('/:id', packageController.deletePackage);

module.exports = router;
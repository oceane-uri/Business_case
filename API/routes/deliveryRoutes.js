const express = require('express');
const deliveryController = require('../controllers/delivery');
const router = express.Router();

router.get('/', deliveryController.getAllDeliveries);
router.post('/', deliveryController.createDelivery);
router.get('/:id', deliveryController.getDeliveryById);
router.patch('/:id', deliveryController.updateDelivery);
router.delete('/:id', deliveryController.deleteDelivery);

module.exports = router;

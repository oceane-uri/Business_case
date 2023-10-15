const express = require('express');
const deliveryController = require('../controllers/delivery');
const router = express.Router();

router.get('/', deliveryController.getAllDeliveries);
router.post('/', deliveryController.createDelivery);

router.param('id', async (req, res, next, id) => {
    try {
        const delivery = await Delivery.findById(id);
        if (!delivery) {
            return res.status(404).json({
                message: 'Livraison non trouvée'
            });
        }
        res.delivery = delivery;
        next();
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get('/:id', deliveryController.getDeliveryById);
router.patch('/:id', deliveryController.updateDelivery);
router.delete('/:id', deliveryController.deleteDelivery);

module.exports = router;

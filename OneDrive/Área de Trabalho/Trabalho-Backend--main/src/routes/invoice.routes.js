const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoice.controller');

router.post('/', invoiceController.create);
router.get('/', invoiceController.findAll);
router.get('/:id', invoiceController.findById);
router.put('/:id', invoiceController.update);
router.delete('/:id', invoiceController.delete);

module.exports = router;
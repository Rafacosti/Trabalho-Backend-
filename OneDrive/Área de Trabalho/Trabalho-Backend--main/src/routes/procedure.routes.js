const express = require('express');
const router = express.Router();
const procedureController = require('../controllers/procedure.controller');

router.post('/', procedureController.create);
router.get('/', procedureController.findAll);
router.get('/:id', procedureController.findById);
router.put('/:id', procedureController.update);
router.delete('/:id', procedureController.delete);

module.exports = router;
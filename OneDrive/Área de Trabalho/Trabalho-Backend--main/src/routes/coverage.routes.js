const express = require('express');
const router = express.Router();
const coverageController = require('../controllers/coverage.controller');

router.post('/', coverageController.create);
router.get('/', coverageController.findAll);
router.get('/:id', coverageController.findById);
router.put('/:id', coverageController.update);
router.delete('/:id', coverageController.delete);

module.exports = router;
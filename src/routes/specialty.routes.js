const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialty.controller');

router.post('/', specialtyController.create);
router.get('/', specialtyController.findAll);
router.get('/:id', specialtyController.findById);
router.put('/:id', specialtyController.update);
router.delete('/:id', specialtyController.delete);

module.exports = router;
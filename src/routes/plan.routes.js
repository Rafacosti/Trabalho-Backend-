const express = require('express');
const router = express.Router();
const controller = require('../controllers/plan.controller');
const validate = require('../middlewares/validateYup');
const { createPlanSchema, updatePlanSchema } = require('../validators/plan.validator');
const validateObjectId = require('../middlewares/validateObjectId')();

router.post('/', validate(createPlanSchema), controller.create);
router.get('/', controller.list);
router.get('/:id', validateObjectId, controller.getById);
router.put('/:id', validateObjectId, validate(updatePlanSchema), controller.update);
router.delete('/:id', validateObjectId, controller.remove);

module.exports = router;

const yup = require('yup');

const createPlanSchema = yup.object({
  name: yup.string().required().min(2).max(100),
  tier: yup.string().oneOf(['bronze','prata','ouro']).required(),
  price: yup.number().required().min(0),
  coverageIds: yup.array().of(yup.string().length(24)),
  carencia: yup.number().min(0)
});

module.exports = { createPlanSchema, updatePlanSchema: createPlanSchema.partial() };

const yup = require('yup');
const isObjectId = require('mongoose').Types.ObjectId.isValid;

exports.createProcedureSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().notRequired(),
  price: yup.number().required().positive(),

  specialtyId: yup.string().required()
    .test('id', 'specialtyId inválido', isObjectId)
});

exports.updateProcedureSchema = exports.createProcedureSchema.partial();
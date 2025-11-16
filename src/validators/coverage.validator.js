const yup = require('yup');
const isObjectId = require('mongoose').Types.ObjectId.isValid;

exports.createCoverageSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().notRequired(),
  limit: yup.number().notRequired(),

  procedureIds: yup.array().of(
    yup.string().test('id', 'procedureId inválido', isObjectId)
  )
});

exports.updateCoverageSchema = exports.createCoverageSchema.partial();
const yup = require('yup');
const isObjectId = require('mongoose').Types.ObjectId.isValid;

exports.createInvoiceSchema = yup.object({
  total: yup.number().required().positive(),
  status: yup.string().oneOf(['pago','pendente','cancelado']).required(),

  appointmentId: yup.string().required()
    .test('id', 'appointmentId inválido', isObjectId),

  beneficiaryId: yup.string().required()
    .test('id', 'beneficiaryId inválido', isObjectId)
});

exports.updateInvoiceSchema = exports.createInvoiceSchema.partial();
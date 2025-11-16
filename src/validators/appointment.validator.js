const yup = require('yup');
const isObjectId = require('mongoose').Types.ObjectId.isValid;

exports.createAppointmentSchema = yup.object({
  date: yup.date().required(),
  status: yup.string().oneOf(['agendado','concluido','cancelado']).required(),

  beneficiaryId: yup.string().required()
    .test('id', 'beneficiaryId inválido', isObjectId),

  professionalId: yup.string().required()
    .test('id', 'professionalId inválido', isObjectId),

  procedureId: yup.string().required()
    .test('id', 'procedureId inválido', isObjectId),

  unitId: yup.string().required()
    .test('id', 'unitId inválido', isObjectId)
});

exports.updateAppointmentSchema = exports.createAppointmentSchema.partial();
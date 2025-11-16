const yup = require('yup');

const createBeneficiarySchema = yup.object({
  fullName: yup.string().required().min(2).max(150),
  cpf: yup.string().required().matches(/^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/, 'CPF must be 11 digits or in the format XXX.XXX.XXX-XX'),
  birthDate: yup.date().nullable(),
  phone: yup.string().nullable(),
  email: yup.string().email().nullable(),
  planId: yup.string().matches(/^[0-9a-fA-F]{24}$/, 'planId must be a valid ObjectId').nullable()
});

module.exports = { createBeneficiarySchema, updateBeneficiarySchema: createBeneficiarySchema.partial() };

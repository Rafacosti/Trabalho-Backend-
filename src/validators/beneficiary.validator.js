const yup = require('yup');

const createBeneficiarySchema = yup.object({
  fullName: yup.string().required().min(2).max(150),
  cpf: yup.string().required().min(11).max(14),
  birthDate: yup.date().nullable(),
  phone: yup.string().nullable(),
  email: yup.string().email().nullable(),
  planId: yup.string().length(24).nullable()
});

module.exports = { createBeneficiarySchema, updateBeneficiarySchema: createBeneficiarySchema.partial() };

const yup = require('yup');

const createUserSchema = yup.object({
  name: yup.string().required().min(2).max(100),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  role: yup.string().oneOf(['admin','manager','user']).default('user')
});

module.exports = { createUserSchema, updateUserSchema: createUserSchema.partial() };

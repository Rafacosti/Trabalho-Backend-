const yup = require('yup');

const createSpecialtySchema = yup.object({
name: yup.string().required().min(2).max(100),
description: yup.string().required().min(5).max(200),
code: yup.string().required().min(2).max(20)
});

module.exports = {
createSpecialtySchema,
updateSpecialtySchema: createSpecialtySchema.partial()
};




const yup = require('yup');
const mongoose = require('mongoose');

const isObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

const createProfessionalSchema = yup.object({
name: yup.string().required().min(2).max(100),
email: yup.string().required().email(),
phone: yup.string().required().min(8).max(20),
document: yup.string().required().min(3).max(20),
specialtyId: yup.string().required().test("objectid", "invalid", isObjectId),
unitId: yup.string().required().test("objectid", "invalid", isObjectId)
});

module.exports = {
createProfessionalSchema,
updateProfessionalSchema: createProfessionalSchema.partial()
};




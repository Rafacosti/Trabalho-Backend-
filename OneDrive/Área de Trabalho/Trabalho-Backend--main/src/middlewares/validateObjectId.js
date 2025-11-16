const mongoose = require('mongoose');
module.exports = (param = 'id') => (req, res, next) => {
  const value = req.params[param];
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return res.status(400).json({ message: `Invalid ObjectId: ${param}` });
  }
  next();
};

module.exports = (schema) => async (req, res, next) => {
    try {
      const validated = await schema.validate(req.body, { abortEarly: false, stripUnknown: true });
      req.body = validated;
      return next();
    } catch (err) {
      return res.status(400).json({ message: 'Validation failed', errors: err.errors });
    }
  };

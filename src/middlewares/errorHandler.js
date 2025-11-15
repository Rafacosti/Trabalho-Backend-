module.exports = (erro, req, res, next) => {
    console.error(erro);
    if (erro.name === 'ValidationError') {
      const errors = Object.values(erro.errors).map(e => e.message);
      return res.status(400).json({ message: 'ValidationError', errors });
    }
    if (erro.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ObjectId' });
    }
    return res.status(erro.statusCode || 500).json({ message: erro.message || 'Internal server error' });
  };
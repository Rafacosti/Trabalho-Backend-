const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority&appName=Clusterpro`;

    await mongoose.connect(mongoURI);
    console.log(' MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

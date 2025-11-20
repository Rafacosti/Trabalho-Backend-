const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url)
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch(err => console.log("Erro ao conectar ao MongoDB:", err));

// Controllers registrados diretamente
app.use(require('./controllers/user.controller'));
app.use(require('./controllers/plan.controller'));
app.use(require('./controllers/beneficiary.controller'));
app.use(require('./controllers/unit.controller'));
app.use(require('./controllers/profissional.controller'));
app.use(require('./controllers/specialty.controller'));
app.use(require('./controllers/procedure.controller'));
app.use(require('./controllers/appointment.controller'));
app.use(require('./controllers/invoice.controller'));
app.use(require('./controllers/coverage.controller'));


app.get('/', (req, res) => {
  res.json({ message: "API funcionando!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando → http://localhost:3000");
});

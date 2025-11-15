API de Gestão de Saúde 

Descrição do Projetos


Este projeto consiste no desenvolvimento de uma API REST completa, O objetivo foi aplicar todos os conceitos estudados sobre APIs REST, Express, Node.js, Mongoose, middleware, validação, rotas, controllers e organização profissional de projeto backend.

A API representa um sistema de gestão de saúde, permitindo o gerenciamento de usuários, beneficiários, planos, unidades, profissionais, especialidades, procedimentos, agendamentos, faturas e coberturas.

 1. Tecnologias Utilizadas

Node.js

Express.js

MongoDB + Mongoose

Express-Async-Errors

Cors

Dotenv

Validações personalizadas

Middleware global de erros

Arquitetura MVC (Models, Controllers, Routes)

 2. Estrutura Geral da API

A API foi construída seguindo princípios REST, incluindo:

Endpoints semânticos
Métodos HTTP corretos (GET, POST, PUT, DELETE)
Uso adequado de status codes (200, 201, 400, 404, 500 etc.)
Validações via Mongoose
Controllers limpos e organizados
Separação total entre rotas, controllers e modelos
Banco de dados MongoDB externo através de URL

Recursos disponíveis:
Recurso	Endpoint base
Usuários	/api/users
Planos	/api/plans
Beneficiários	/api/beneficiaries
Unidades	/api/units
Profissionais	/api/professionals
Especialidades	/api/specialties
Procedimentos	/api/procedures
Agendamentos	/api/appointments
Faturas	/api/invoices
Coberturas	/api/coverages

Como Executar o Projeto
    
    Pré-requisitos

Node.js versão LTS

MongoDB Atlas (ou local)

VSCode

Postman (opcional para testes)


 Clonar o repositório
git clone https://github.com/Rafacosti/Trabalho-Backend-.git

 Entrar na pasta
cd Trabalho-Backend-

 Instalar dependências
npm install

Configurar o arquivo .env

Crie um arquivo .env na raiz com:

MONGO_URI=coloque_sua_url_do_mongodb_aqui
PORT=3000

Iniciar o servidor
npm start


Servidor iniciará em:

http://localhost:3000

📌 4. Conexão com o Banco de Dados

O MongoDB é conectado via arquivo:

/config/db.js


Com a seguinte estrutura:

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

📌 5. Arquivo principal app.js
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', require('./routes/user.routes'));
app.use('/api/plans', require('./routes/plan.routes'));
app.use('/api/beneficiaries', require('./routes/beneficiary.routes'));
app.use('/api/units', require('./routes/unit.routes'));
app.use('/api/professionals', require('./routes/professional.routes'));
app.use('/api/specialties', require('./routes/specialty.routes'));
app.use('/api/procedures', require('./routes/procedure.routes'));
app.use('/api/appointments', require('./routes/appointment.routes'));
app.use('/api/invoices', require('./routes/invoice.routes'));
app.use('/api/coverages', require('./routes/coverage.routes'));

app.get('/', (req,res) => res.json({ message: 'API up' }));

app.use(errorHandler);

module.exports = app;

 Endpoints da API (Resumo)

Cada recurso possui:

✔ GET — listar todos
✔ GET /:id — buscar por ID
✔ POST — criar
✔ PUT /:id — atualizar
✔ DELETE /:id — remover

Exemplo (Beneficiários):

POST /api/beneficiaries
{
  "name": "Carlos Mendes",
  "cpf": "12345678900",
  "planId": "672ab856ed9f1d489c33149a"
}

 Middleware Global de Erros

Todos os erros passam pelo arquivo:

/middlewares/errorHandler.js


Incluindo:

validações

erros de MongoDB

erros de controllers

mensagens personalizadas


 Testes com Postman

Uma collection Postman foi utilizada para:

testar todos os endpoints;

validar respostas;

simular erros;

exportação em JSON (conforme exigido pela atividade).

Conclusão

Este projeto demonstra, de forma completa, os conhecimentos aplicados na disciplina:

Estrutura profissional de backend
Uso correto de rotas, controladores e modelos
Banco de dados MongoDB
Middleware de erro
Validações
Padrões REST
Modularidade e boas práticas

A API está pronta para evoluir para autenticação JWT, dashboards, front-end e muito mais.
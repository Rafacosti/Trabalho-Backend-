API de Gestão de Saúde

A API de Gestão de Saúde foi desenvolvida para administrar usuários, beneficiários, planos, unidades, profissionais, especialidades, procedimentos, coberturas, agendamentos e faturas. O projeto aplica conceitos de REST, Express, Node.js, Mongoose, validação e boas práticas de backend.

 Tecnologias Utilizadas

Node.js

Express.js

MongoDB (Atlas) + Mongoose

Yup para validações

Express-Async-Errors

Dotenv

Cors

Arquitetura MVC

 Descrição do Sistema

A API simula um sistema real de gestão de saúde, permitindo:

Cadastro e gerenciamento de beneficiários e planos

Cadastro de unidades e profissionais de saúde

Registro de especialidades e procedimentos

Agendamento de consultas

Emissão de faturas

Controle de coberturas de planos

As entidades possuem relacionamentos adequados (ex.: beneficiário → plano, profissional → unidade + especialidade, etc.).

 Estrutura resumida do projeto 
src/
├── config/        # conexão MongoDB
├── controllers/   # lógica dos recursos
├── middlewares/   # validações e erros
├── models/        # schemas Mongoose
├── routes/        # rotas REST
├── validators/    # schemas Yup
└── app.js

 Principais Collections

Users — administradores e operadores
Plans — planos de saúde
Beneficiaries — pacientes
Units — unidades de atendimento
Professionals — médicos/profissionais
Specialties — especialidades
Procedures — exames e consultas
Coverages — regras de cobertura
Appointments — agendamentos
Invoices — faturas geradas

 Diagrama da Modelagem

O diagrama está em:

/src/docs/diagrama.png

🔗 Endpoints Principais

Cada recurso segue o padrão:

GET /        → listar
GET /:id     → buscar por ID
POST /       → criar
PUT /:id     → atualizar
DELETE /:id  → remover


Exemplos de recursos:

/api/users
/api/plans
/api/beneficiaries
/api/units
/api/professionals
/api/specialties
/api/procedures
/api/appointments
/api/invoices
/api/coverages

 Como Executar
1. Clonar o repositório
git clone https://github.com/Rafacosti/Trabalho-Backend-.git
cd Trabalho-Backend-

2. Instalar dependências
npm install

3. Criar arquivo .env
PORT=3000
MONGO_URI=sua_url_mongodb

4. Iniciar servidor
npm start


Servidor: http://localhost:3000

 Conexão com o Banco

A conexão está em:

src/config/db.js


Com uso de mongoose.connect() e tratamento de erro.

 Integrantes


Exemplo (preencher conforme necessário):

Modelagem das entidades

Desenvolvimento dos CRUDs

Implementação dos validators

Configuração MongoDB

Organização da estrutura

Documentação no README

 Resumo Final

A API entrega:

CRUD completo para todos os recursos

Validações com Yup e Mongoose

Middleware global de erros

Estrutura modular e escalável

Conexão funcional com MongoDB

Documentação organizada

Diagrama de modelagem incluído

A aplicação está pronta para evoluir com autenticação JWT, dashboards e integração com front-end.

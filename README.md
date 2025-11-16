API de Gestão de Saúde  
## Projeto Avaliativo – Construção de Backend 

---

##  Descrição do Projeto

Este projeto consiste no desenvolvimento de uma **API REST completa**, criada como parte da avaliação da disciplina *Construção de Backend, ministrada pelo professor **Gustavo Clay**.

O objetivo foi aplicar na prática os conceitos estudados durante o semestre, incluindo:

- Estruturação de API REST  
- CRUDs completos  
- Modelagem de dados  
- Validação com Yup e Mongoose  
- Conexão com banco de dados MongoDB Atlas  
- Organização de projeto com separação em camadas  
- Uso profissional de GitHub e Postman  

A API representa um sistema de gestão de saúde, permitindo o gerenciamento de:

- Usuários  
- Beneficiários  
- Planos  
- Unidades  
- Profissionais  
- Especialidades  
- Procedimentos  
- Coberturas  
- Agendamentos  
- Faturas  

Foram implementadas **10 entidades**, todas com **CRUD completo** e devidamente relacionadas.

---

Diagrama da Modelagem

O diagrama contendo todas as collections e relacionamentos está dentro da pasta:

/src/docs/diagrama.png 


<img width="1058" height="864" alt="diagrama" src="https://github.com/user-attachments/assets/589073e7-8d99-4641-9cd2-538fed14ffe3" />

---

##  Tecnologias e Conceitos Aplicados

###  Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Yup** (validações)
- **Express-Async-Errors**
- **CORS**
- **Dotenv**

###  Conceitos importantes utilizados
- Arquitetura MVC  
- Princípios REST:
  - Métodos HTTP corretos (GET, POST, PUT, DELETE)
  - URLs semânticas
  - Status codes adequados (200, 201, 404, 400…)
- Middlewares personalizados (validação, erros, ObjectId)
- Modelagem de banco com relacionamentos usando `ObjectId`
- Postman para testes e documentação
- GitHub com issues organizadas e colaboração

---

##  Instalação e Execução

###  Pré-requisitos
- Node.js LTS  
- NPM  
- MongoDB Atlas  
- Postman (opcional)  
- Git  

###  Passos para rodar o projeto

 **Clonar o repositório**
```bash
git clone https://github.com/Rafacosti/Trabalho-Backend-.git
Entrar no diretório

bash
Copiar código
cd Trabalho-Backend-
Instalar as dependências

bash
Copiar código
npm install
Criar o arquivo .env na raiz

ini
Copiar código
PORT=3000
MONGO_URI=sua_string_do_mongodb
Iniciar o servidor

bash
Copiar código
npm start
 > O servidor será iniciado em:

arduino
Copiar código
http://localhost:3000
4. Endpoints da API
A seguir, os recursos implementados, cada um com seu CRUD completo.

 Recurso: Usuários /api/users
GET /api/users

GET /api/users/:id

POST /api/users

PUT /api/users/:id

DELETE /api/users/:id

Exemplo de criação (POST)

json
Copiar código
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456",
  "role": "user"
}

 Recurso: Beneficiários /api/beneficiaries
CRUD completo

Exemplo de criação

json
Copiar código
{
  "name": "Carlos Mendes",
  "document": "12345678900",
  "email": "carlos@email.com",
  "planId": "6730c89ab874129981a1fc33"
}


 Recurso: Planos /api/plans
CRUD completo

Exemplo

json
Copiar código
{
  "name": "Plano Ouro",
  "tier": "ouro",
  "price": 2150,
  "carencia": 2
}
 Recurso: Unidades /api/units
 Recurso: Profissionais /api/professionals
 Recurso: Especialidades /api/specialties
 Recurso: Procedimentos /api/procedures
 Recurso: Coberturas /api/coverages
 Recurso: Agendamentos /api/appointments
 Recurso: Faturas /api/invoices
 Todos possuem:

GET (todos)

GET por ID

POST

PUT

DELETE

5. Modelagem do Banco de Dados
Toda a modelagem foi feita com MongoDB e Mongoose.

O diagrama oficial está disponível em:

bash
Copiar código
src/docs/diagrama.png
Foram implementadas 10 collections, todas relacionadas entre si usando ObjectId.

6. Ferramentas e Colaboração
🛠 Git & GitHub
Repositório único para toda a equipe

Issues criadas para cada etapa:

Configuração do projeto

Modelagem

CRUDs

Validações

Documentação

Cada integrante foi responsável por diferentes partes do código

 Postman
Testes completos dos 10 CRUDs

Collection exportada adicionada ao repositório

Exemplos de requisição e resposta documentados

7. Integrantes e Contribuições
Integrante	GitHub	Contribuições
Rafael Araújo Costa	@Rafacosti	CRUDs, validações, modelagem, README, organização do projeto
(Adicionar outros membros)		

Cada integrante deve descrever:

CRUDs que desenvolveu

Issues que resolveu

Partes da documentação que escreveu

Modelos ou validações que implementou

 Conclusão
Esta API foi desenvolvida seguindo boas práticas de backend, incluindo:

Estrutura modular

Padrões REST

Uso consistente de validações

Conexão com MongoDB Atlas

CRUDs completos e funcionais

Documentação organizada

O projeto demonstra domínio dos conceitos fundamentais da disciplina e está preparado para evoluções futuras como autenticação JWT, front-end e dashboards.

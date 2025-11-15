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

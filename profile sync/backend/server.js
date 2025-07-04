const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
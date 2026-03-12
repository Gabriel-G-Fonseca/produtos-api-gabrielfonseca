const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const produtosRoutes = require('./routes/produtos');
app.use('/api/v1/produtos', produtosRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

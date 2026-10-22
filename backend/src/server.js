
const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('API do Gerenciador Financeiro funcionando!');
});

// Agrupa as rotas de transações
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

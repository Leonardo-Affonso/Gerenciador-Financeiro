
const express = require('express');

const router = express.Router();

// Rota de teste para receber dados
router.post('/teste', (req, res) => {
    const dadosRecebidos = req.body;

    console.log(dadosRecebidos);

    res.json({
        mensagem: 'Dados recebidos com sucesso!',
        dados: dadosRecebidos
    });
});

module.exports = router;

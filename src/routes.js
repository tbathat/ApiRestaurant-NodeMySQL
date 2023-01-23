const express = require('express');
const router = express.Router();

const RestauranteController = require('./controllers/RestauranteController');

router.get('/restaurantes', RestauranteController.buscarTodos);
router.get('/restaurante/:codigo', RestauranteController.buscarUm);
router.post('/restaurante', RestauranteController.inserir);
router.put('/restaurantes/:codigo', RestauranteController.alterar);
router.delete('/restaurantes/:codigo', RestauranteController.excluir);

module.exports = router;
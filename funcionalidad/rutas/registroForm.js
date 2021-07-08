const express = require('express');
const router = express.Router();
const controlador = require('../servicios/registroForm/controlador');

router.post('/crear-registro', controlador.crearRegistroForm);

module.exports = router;
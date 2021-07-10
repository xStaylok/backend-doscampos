const express = require('express');
const router = express.Router();
const controlador = require('../servicios/usuario/controlador');

router.post('/crear-usuario', controlador.crear-usuario);

module.exports = router;
const express = require('express');
const router = express.Router();
const { consultPokeAxios } = require('../controllers/indexControllers');

router.get('/consulta', consultPokeAxios);

module.exports = router ;
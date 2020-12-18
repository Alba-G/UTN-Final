var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');//bd.js y todas las consultas relacionadas con novedades

/* GET mitos page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render('mitos', { 
    isMitos:true,
    novedades
  });//hbs
});

module.exports = router;
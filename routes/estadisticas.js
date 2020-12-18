var express = require('express');
var router = express.Router();

/* GET estadisticas page. */
router.get('/', function(req, res, next) {
  res.render('estadisticas', { 
    isEstadisticas:true
  });
});
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET alimentacion page. */
router.get('/', function(req, res, next) {
  res.render('alimentacion', { 
    isAlimentacion:true 
  });
});

module.exports = router;
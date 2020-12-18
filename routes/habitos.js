var express = require('express');
var router = express.Router();

/* GET habitos page. */
router.get('/', function(req, res, next) {
  res.render('habitos', { 
    isHabitos:true 
  });
});

module.exports = router;
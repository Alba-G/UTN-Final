var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout:'admin/layout'
  });  
});
/*para deslog. > destruir la variable session*/ 
router.get('/logout', function (req, res, next) {
  req.session.destroy();//destruir la sesion de usuario y passy volver a login
  res.render('admin/login', {
    layout:'admin/layout'
  });  
});
router.post('/', async (req,res,next) =>{
  try{
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUserNameAndPassword(usuario,password);

    if(data != undefined){
      
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
    }else{
      res.render('admin/login',{
        layout:'admin/layout',
        error:true//agregar esto en hbs> login.hbs
      });
    }//cierro else

  }catch(error){
    console.log(error);
  }//cierro catch
})//cierro post 



module.exports = router;
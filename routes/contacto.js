var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
     isContacto:true 
    });
});

router.post('/', async (req, res, next) => {
  console.log(req.body);//ver si traigo datos de mail
  var nombre=req.body.nombre;
  var email=req.body.email;
  var tel=req.body.tel;
  var mensaje=req.body.comentarios;

  var obj = {
    to: 'albalaisgonzalez7@yahoo.com',
    subject:'Contacto desde la web',
    html: nombre + " se contacto a traves de la página y quiere la guia, su e-mail es: " + email + ". <br> Además , hizo el siguiente comentario: " + mensaje + ". <br> Su tel:" + tel
  } // cierra var obj 
  var transport = nodemailer.createTransport({
      host:process.env.SMTP_HOST,
      port:process.env.SMTP_PORT,
      auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
      }

  })//CIERRA TRANSPORTER
  var info= await transport.sendMail(obj);

  res.render('contacto',{
    message:'Mensaje enviado correctamente',
    isContacto:true 
  });

});//cierra  peticion del post


module.exports = router;
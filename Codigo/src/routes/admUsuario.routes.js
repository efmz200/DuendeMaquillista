const express = require('express');
const router =express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const Usuario = require('../models/modelo/Usuario');

router.get('/',async (req,res) => {
    const usuario = await Usuario.find({})
    console.log(usuario)
    res.json(usuario)
})

//iniciarSesion
router.post('/iniciarSesion',async (req,res) => {
    try{
        success = false;
        const {correo,contrasena} = req.body;
        const usuario =await Usuario.findOne({correo,contrasena})
        if (usuario != null){
            success = true;            
        } 

        res.json({ success: success });

    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en el inicio de sesión'
        })
    }
})

//Validar Usuario
router.post('/registrarUsuario', async (req,res) =>{
    try{
        const {nombre,apellido,correo,contrasena,nacimiento,telefono,genero} = req.body;
        console.log(nacimiento)
        const usuario = new Usuario({
            nombre,
            apellido,
            correo,
            contrasena,
            nacimiento,
            telefono,
            genero
        })
        await usuario.save();
        console.log(usuario)
        res.json({
            status:'Usuario guardado'
        });
        
    }catch(err){        
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
});

//actualiza un usuario si concuerda el correo y la contraseña
router.post('/actualizarUsuario', async (req,res) =>{
    try{
        const {nombre,apellido,correoAntiguo,constasenaAntigua,correo,contrasena,nacimiento,telefono,genero} = req.body;
        const usuario = await Usuario.findOneAndUpdate({correo: correoAntiguo,contrasena: constasenaAntigua},
        {
            nombre,
            apellido,
            correo,
            contrasena,
            nacimiento,
            telefono,
            genero
        }, {new: true});
        console.log(usuario)
        res.json({
            status:'Usuario actualizado'
        });        
    }catch(err){        
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
})

router.post('/olvideContrasena', async (req,res) =>{
    try{
        const {correo} = req.body;
        console.log(process.env.GMAIL_MAIL)
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.GMAIL_MAIL,
              pass: process.env.GMAIL_PASSWORD,
              clientId: process.env.GMAIL_CLIENT_ID,
              clientSecret: process.env.GMAIL_CLIENT_SECRET,
              refreshToken: process.env.GMAIL_REFRESH_TOKEN
            }
          });

        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let contrasena = '';
        for (let i = 0; i < 12; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres[indice];
        }
        
        const mensaje = `Su nueva contraseña es: ${contrasena}. \nSi usted no solicitó el cambio de contraseña, cámbiela inmediatamente.`;
  
        const mailOptions = {
            from: process.env.GMAIL_MAIL,
            to: correo,
            subject: 'Cambio de contrasenia',
            text: mensaje
        };
          
        const usuario = await Usuario.findOneAndUpdate({correo},{contrasena}, {new: true});
        if (usuario != null){          
        
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            
        }else{
            console.log('No se encontró el usuario')
        }
        
        return res.json({
            status:'Si su correo es correcto, se le enviará un correo con su nueva contraseña'
        });
        
    }catch(err){        
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
})
//elimina un usuario si concuerda el correo y la contraseña
router.post('/eliminarUsuario', async (req,res) =>{
    try{
        const {correo,contrasena} = req.body;
        await Usuario.findOneAndDelete({ correo,contrasena });
               
        res.json({
            status: true,
            descripcion: 'Usuario eliminado'
        });
        
    }catch (err) {
        console.log(err);
        res.json({
          status: false,
          message: 'Hubo un error en la operación'
        });      
    }
})





module.exports = router;
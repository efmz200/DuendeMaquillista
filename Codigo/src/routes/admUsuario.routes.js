const express = require('express');
const router =express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const Usuario = require('../models/modelo/Usuario');
const Carrito = require('../models/modelo/Carrito');
const Notificacion = require('../models/modelo/Notificacion');

router.get("/", async (req, res) => {
    const usuario = await Usuario.find({});
    console.log(usuario);
    res.json(usuario);
});



//iniciarSesion
router.post('/iniciarSesion',async (req,res) => {
    try{
        const {correo,contrasena} = req.body;
        const usuario =await Usuario.findOne({correo,contrasena})
        if (usuario != null){
            console.log({ success: true,usuario: usuario, estatus: "Sesion iniciada" })
            res.json({ success: true,usuario: usuario, estatus: "Sesion iniciada" });
             return;            
        } 
        res.json({ 
            success: false,
            usuario, 
            estatus: "Correo o contrseña invalidos" 
        });

    }catch(err){
        console.log(err)
        res.json({
            success: false,
            status: "Hubo un error en el inicio de sesión",
        });
    }
});

//Validar Usuario
router.post('/registrarUsuario', async (req,res) =>{
    try{
        var {nombre,apellido,correo,contrasena,nacimiento,telefono,genero,admin} = req.body;
        var carrito = new Carrito({
            listaProductos: []
        });
        //console.log(carrito);
        if (admin == null){
            admin = false;
        }
        //const carro = await carrito.save();
        
        Carrito.insertMany(carrito);
        const usuario = new Usuario({
            nombre,
            apellido,
            correo,
            contrasena,
            nacimiento,
            telefono,
            genero,
            carrito, 
            admin
        })
        await usuario.save();
        //console.log(usuario);
        res.json({
            status: "Usuario guardado",
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//actualiza un usuario si concuerda el correo y la contraseña
router.post("/actualizarUsuario", async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            correoAntiguo,
            constasenaAntigua,
            correo,
            contrasena,
            nacimiento,
            telefono,
            genero,
        } = req.body;
        const usuario = await Usuario.findOneAndUpdate(
            { correo: correoAntiguo, contrasena: constasenaAntigua },
            {
                nombre,
                apellido,
                correo,
                contrasena,
                nacimiento,
                telefono,
                genero,
            },
            { new: true }
        );
        console.log(usuario);
        res.json({
            success: true,
            status: "Usuario actualizado",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//reestablece la contraseña de un usuario si concuerda el correo
router.post('/olvideContrasena', async (req,res) =>{
    try{
//prepara el correo 
        const {correo} = req.body;
        console.log(process.env.GMAIL_MAIL)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.GMAIL_MAIL,
                pass: process.env.GMAIL_PASSWORD,
                clientId: process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            },
        });

//genera una contraseña aleatoria
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let contrasena = '';
        for (let i = 0; i < 12; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres[indice];
        }
        
//envio del correo
        const mensaje = `Su nueva contraseña es: ${contrasena}. \nSi usted no solicitó el cambio de contraseña, cámbiela inmediatamente.`;

        const mailOptions = {
            from: process.env.GMAIL_MAIL,
            to: correo,
            subject: "Cambio de contrasenia",
            text: mensaje,
        };
          
//actualiza la contraseña en la base de datos
        const usuario = await Usuario.findOneAndUpdate({correo},{contrasena}, {new: true});
        if (usuario != null){          
        
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
        } else {
            console.log("No se encontró el usuario");
        }

        return res.json({
            success: true,
            status:
                "Si su correo es correcto, se le enviará un correo con su nueva contraseña",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});
//elimina un usuario si concuerda el correo y la contraseña
router.post("/eliminarUsuario", async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        await Usuario.findOneAndDelete({ correo, contrasena });

        res.json({
            status: true,
            descripcion: "Usuario eliminado",
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: false,
            message: "Hubo un error en la operación",
        });
    }
});

router.get('/actualizar',async (req,res) => {
    var usr = req.query.usuario
    console.log("actualizando: ",usr)
    var notis = []
    var usuario = await Usuario.findOne({correo:usr})
    if (usuario == null){
        return;
    }
    var notificaciones = await Notificacion.updateMany({receptor:usr},{receptorNotificado:true},{new:true})
    var notificaciones = await Notificacion.find({receptor:usr})
    console.log("receptor:" ,notificaciones)
    if (notificaciones != null)
        notis= notis.concat(notificaciones)
    var notificaciones = await Notificacion.updateMany({emisor:usr},{emisorNotificado:true},{new:true})
    var notificaciones = await Notificacion.find({emisor:usr})
    console.log("emisor:" ,notificaciones)
    if (notificaciones != null)
        notis= notis.concat(notificaciones)
    usuario.notificaciones = notis
    usuario = await Usuario.findOneAndUpdate({correo:usr},usuario,{new:true})
})


router.post('/notificacionesUsr',async (req,res) => {
    try{
        const {correo} = req.body;
        var notificacionesReciv = await Notificacion.find({receptor:correo})
        var notificaciones = await Notificacion.find({emisor:correo})
        notificaciones = notificaciones.concat(notificacionesReciv)
        console.log(notificaciones)
        res.json({
            status: "Notificaciones encontradas",
            success: true,
            notificaciones
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});


module.exports = router;

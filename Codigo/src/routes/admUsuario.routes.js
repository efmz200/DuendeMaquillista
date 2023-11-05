const express = require('express');
const router =express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const Usuario = require('../models/modelo/Usuario');
const Carrito = require('../models/modelo/Carrito');

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
            res.json({ success: true, estatus: "Sesion iniciada" });
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
        const {nombre,apellido,correo,contrasena,nacimiento,telefono,genero,admin} = req.body;
        console.log(nacimiento)
        var carrito = new Carrito({
            productos: []
        });
        carrito = await carrito.save();
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
        console.log(usuario);
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

//validar usuario == iniciar sesion?

module.exports = router;

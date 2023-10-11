const express = require('express');
const router =express.Router();

const Usuario = require('../models/modelo/Usuario');

router.get('/',async (req,res) => {
    const usuario =await Usuario.find({})
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

router.post('/actualizarUsuario', async (req,res) =>{
    try{
        const {nombre,apellido,correoAntiguo,correo,contrasena,nacimiento,telefono,genero} = req.body;
        const usuario = await Usuario.findOneAndUpdate({correo: correoAntiguo},
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


router.post('/eliminarUsuario', async (req,res) =>{
    try{
        const {correo} = req.body;
        await Usuario.findOneAndDelete({ correo });
               
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
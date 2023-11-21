const express = require('express');
const router =express.Router();

const Producto = require('../models/modelo/Factura');
const Notificacion = require('../models/modelo/Notificacion');
const Factura = require('../models/modelo/Factura');


//pendiente
router.post('/enviarInteresContenido',async(req,res)=>{
    const {pMensajeInteresContenido,pIDContenido} = req.body;
    
    res.json({status: 'Interes guardado'});
});

//pendiente
router.post('/enviarFactura',async(req,res)=>{
    const {pNumeroPedido,pIDContenido} = req.body;
    
    res.json({status: 'Interes guardado'});
});

router.post('/getFactura',async(req,res)=>{
    const {pNumeroFactura} = req.body;
    var Factura = await Factura.findOne({numeroFactura:pNumeroFactura});
    if (Factura == null){
        res.json({status: 'No existe factura'});
        return;
    }
    
    res.json({status: 'Factura encontrada',Factura});
});

//desde aquí lo nuevo :p
router.post('/crearFactura',async(req,res)=>{
    try{
        const {numeroFactura,detalleCompra,fecha,total,direccion,comprobante} = req.body;
        var factura = new Factura({
            numeroFactura,
            detalleCompra,
            fecha,
            total,
            direccion,
            comprobante
        });
        const facturaGuardada = await factura.save();
        console.log(facturaGuardada);
        res.json({
            status: 'Factura guardada',
            success: true
        });
    }catch(err){
        console.log(err)
        res.json({
            status: "Hubo un error en la creacion de la factura",
            success: false
        });
    }
});

router.post('/actualizarEstadoFactura',async(req,res)=>{
    try{
        const {numeroFactura,estado} = req.body;
        var factura = await Factura.findOneAndUpdate({numeroFactura:numeroFactura},{estado:estado},{new:true});
        if (factura == null){
            res.json({
                success:false,
                status: 'No existe factura'});
            return;
        }
        console.log(factura);
        res.json({
            status: 'Factura actualizada',
            success: true
        });
    }catch(err){
        console.log(err)
        res.json({
            status: "Hubo un error en la actualizacion de la factura",
            success: false
        });
    }

});

router.post('/verFacturas',async(req,res)=>{
    var facturas = await Factura.find({});
    if (facturas == null){
        res.json({status: 'No existen facturas'});
        return;
    }
    
    res.json({status: 'Facturas encontradas',facturas});
});


function actualizar(username) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://localhost:3000/api/usuario/actualizar?usuario=${username}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  
router.post('/agregarNotificacion',async(req,res)=>{
    try{
        const {correoEmisor,correoReceptor,mensaje} = req.body;
        var notificacion = new Notificacion({
            emisor: correoEmisor,
            receptor: correoReceptor,
            mensaje: mensaje
        });
        const notificacionGuardada = await notificacion.save();
        console.log(notificacionGuardada);
        actualizar(correoReceptor);
        actualizar(correoEmisor);
        res.json({
            succes:true,
            status: 'Notificacion guardada'
        });
    }catch(err){
        console.log(err)
        res.json({
            status: "Hubo un error en la creacion de la notificacion",
            success: false
        });
    }
})

module.exports = router;
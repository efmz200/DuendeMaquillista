const express = require('express');
const router =express.Router();

const Producto = require('../models/modelo/Factura');


//pendiente
router.prototype('/enviarInteresContenido',async(req,res)=>{
    const {pMensajeInteresContenido,pIDContenido} = req.body;
    
    res.json({status: 'Interes guardado'});
});

//pendiente
router.prototype('/enviarFactura',async(req,res)=>{
    const {pNumeroPedido,pIDContenido} = req.body;
    
    res.json({status: 'Interes guardado'});
});

router.prototype('/getFactura',async(req,res)=>{
    const {pNumeroFactura} = req.body;
    var Factura = await Factura.findOne({numeroFactura:pNumeroFactura});
    if (Factura == null){
        res.json({status: 'No existe factura'});
        return;
    }
    
    res.json({status: 'Factura encontrada',Factura});
});

module.exports = router;
const express = require('express');
const router =express.Router();
const Producto = require('../models/modelo/Producto');
const CategoriaProducto = require('../models/modelo/CategoriaProducto');

router.post('/agregarProducto',async(req,res)=>{
    const {codigo,nombre,precio,disponibilidad,descripcion,imagen} = req.body;
    const producto = new Producto({
        codigo,
        nombre,
        precio,
        disponibilidad,
        descripcion,
        imagen});
    await producto.save();
    res.json({status: 'Producto guardado'});
})

router.post('/eliminarProducto',async(req,res)=>{
    const {codigo} = req.body;
    await Producto.findOneAndDelete({codigo});
    res.json({status: 'Producto eliminado'});
})

router.post('/agregarStock',async(req,res)=>{
    const {codigo,stock} = req.body;
    const producto = await Producto.findOne({codigo});
    producto.disponibilidad = producto.disponibilidad + stock;
    await producto.save();
    res.json({status: 'Stock actualizado'});
})



module.exports = router;
const express = require('express');
const router =express.Router();
const Producto = require('../models/modelo/Producto');
const CategoriaProducto = require('../models/modelo/CategoriaProducto');
const Carrito = require('../models/modelo/Carrito');

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

//lista de categorias
router.get('/getCategoriaProductos',async(req,res)=>{
    await CategoriaProducto.find({});
    categorias = [];
    for (let i = 0; i < categorias.length; i++) {
        categorias.push(categorias[i].nombre);
    }
    res.json({
        status: 'Categoria encontrada',
        productos: categorias
    });
})

//lista de productos de una categoria
router.post('/getProducto',async(req,res)=>{
    const {categoria} = req.body;
    await CategoriaProducto.findOne({nombre:categoria});
    res.json({
        status: 'Categoria encontrada',
        productos: categoria.Productos
    });
})

//se agrega stock a un producto por medio de un codigo
router.post('/agregarStock',async(req,res)=>{
    const {codigo,stock} = req.body;
    const producto = await Producto.findOne({codigo});
    producto.disponibilidad = producto.disponibilidad + stock;
    await producto.save();
    res.json({status: 'Stock actualizado'});
})


//se agrega un producto al carrito
router.post('/agregarProductoCarrito',async(req,res)=>{
    const {id_carrito,codigoProducto,cantidad} = req.body;
    var carrito = await Carrito.findOne({_id:id_carrito});
    const producto = await Producto.findOne({codigo:codigoProducto});
    if (producto == null){
        res.json({status: 'El producto no existe'});
        return;
    }
    if (producto.disponibilidad == 0){
        res.json({status: 'No hay stock disponible'});
        return;
    }
    if (cantidad > producto.disponibilidad){
        res.json({status: 'No hay stock suficiente'});
        return;
    }
    for (let i = 0; i < carrito.listaProductos.length; i++) {
        if (carrito.listaProductos[i].producto.codigo == codigoProducto) {
            carrito.listaProductos[i].cantidad += cantidad;
            await carrito.save();
            console.log(carrito);
            res.json({status: 'El producto ya estaba agregado al carrito'});
            return;
        }
    }
    carrito.listaProductos.push({cantidad:cantidad,producto:producto});
    carrito.save();
    console.log(carrito);
    res.json({status: 'Producto agregado al carrito'});    
})

//se elimina un producto del carrito
router.post('/eliminarProductoCarrito',async(req,res)=>{
    const {id_carrito,codigoProducto} = req.body;
    var carrito = await Carrito.findOne({_id:id_carrito});
    for (let i = 0; i < carrito.listaProductos.length; i++) {
        if (carrito.listaProductos[i].producto.codigo == codigoProducto) {
            carrito.listaProductos.pop(i);
            await carrito.save();
            console.log(carrito);
            res.json({status: 'Producto eliminado del carrito'});
            return;
        }
    }
    res.json({status: 'El producto no estaba en el carrito'});
})

//se obtiene 

module.exports = router;
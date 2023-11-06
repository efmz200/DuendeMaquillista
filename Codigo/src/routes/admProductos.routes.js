const express           = require('express');
const router            = express.Router();
const Producto          = require('../models/modelo/Producto');
const CategoriaProducto = require('../models/modelo/CategoriaProducto');
const Carrito           = require('../models/modelo/Carrito');
const Categoria = require('../models/modelo/Categoria');

router.post('/agregarProducto',async(req,res)=>{
    try{
        const {codigo,nombre,precio,disponibilidad,descripcion,imagen} = req.body;
        const producto = new Producto({
            codigo,
            nombre,
            precio,
            disponibilidad,
            descripcion,
            imagen});
        await producto.save();
        res.json({
            succes: true,
            status: 'Producto guardado'});
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

router.post('/eliminarProducto',async(req,res)=>{
    try{
        const {codigo} = req.body;
        await Producto.findOneAndDelete({codigo});
        res.json({
            succes: true,
            status: 'Producto eliminado'});
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }    
})


//agregar producto a una categoria
router.post('/agregarProductoCategoria',async(req,res)=>{
    try{
        const {nombreCategoria,pCodigoProducto} = req.body;
        var producto = await Producto.findOne({codigo:pCodigoProducto});
        if (producto == null){
            res.json({
                succes:false,
                status: 'El producto no existe'});
            return;
        }
        var cat = await CategoriaProducto.findOne({nombre:nombreCategoria});
        if (cat == null){
            cat = new CategoriaProducto({nombre:nombreCategoria,Productos:[producto]});            
            await cat.save();
            console.log(cat);
            res.json({
                succes:true,
                status: 'Se agregó el producto a la categoria'});
            return;
        }   
        
        for (let i = 0; i < cat.Productos.length; i++) {
            if (cat.Productos[i].codigo == pCodigoProducto) {
                res.json({
                    succes:false,
                    status: 'El producto ya estaba en la categoria'});
                return;
            }
        }
        cat.Productos.push(producto);
        await Categoria.findOneAndUpdate({nombre:nombreCategoria},cat, {new: true});
        console.log(cat);
        res.json({
            succes: true,
            status: 'Producto agregado a la categoria'});
    }catch(err){    
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

//lista de categorias
router.get('/getCategoriaProductos',async(req,res)=>{
    try{
        cats = await CategoriaProducto.find({});
        categorias = [];
        for (let i = 0; i < cats.length; i++) {
            categorias.push(cats[i].nombre);
        }
        res.json({
            succes: true,
            status: 'Categoria encontrada',
            categorias,
            cats
        });
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

//lista de productos de una categoria
router.post('/getProducto',async(req,res)=>{
    try{
        const {categoria} = req.body;
        var cat = await CategoriaProducto.findOne({nombre:categoria});
        if (cat == null){
            res.json({
                succes:false,
                productos: [],
                status: 'La categoria no existe'});
            return;
        }
        res.json({
            status: 'Categoria encontrada',
            productos: categoria.Productos
        });
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

//se agrega stock a un producto por medio de un codigo
router.post('/agregarStock',async(req,res)=>{
    try{
        const {pCodigoProducto,productosASumar} = req.body;
        const producto = await Producto.findOne({codigo:pCodigoProducto});
        if (producto == null){
            res.json({
                succes:false,
                status: 'El producto no existe'
            });
            return;
        }
        producto.disponibilidad = producto.disponibilidad + productosASumar;
        const prod = await Producto.findOneAndUpdate({_id:producto._id},producto, {new: true})
        console.log(prod);
        res.json({
            succes: true,
            status: 'Stock actualizado'
        });
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})


//se agrega un producto al carrito
router.post('/agregarProductoCarrito',async(req,res)=>{
    try{
        console.log(req.body)
        const {idCarrito,codigoProducto,cantidad} = req.body;
        var carrito = null;
        if (idCarrito != null){
            carrito = await Carrito.findOne({_id:idCarrito});
        }
        if (carrito == null){
            carrito = new Carrito({listaProductos:[]});
        }
        
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
                res.json({
                    succes:false,
                    idCarrito,
                    status: 'El producto ya estaba agregado al carrito se aumento la cantidad'
                });
                return;
            }
        }
        carrito.listaProductos.push({cantidad:cantidad,producto:producto});
        carrito.save();
        carr = await Carrito.findOneAndUpdate({_id:idCarrito},carrito, {new: true})
        console.log(carr);
        res.json({
            succes:true,
            idCarrito,
            status: 'Producto agregado al carrito'
        });    
    }catch(err){    
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

//se elimina un producto del carrito
router.post('/eliminarProductoCarrito',async(req,res)=>{
    try{
        const {idCarrito,codigoProducto} = req.body;
        var carrito = await Carrito.findOne({_id:idCarrito},);
        console.log(carrito);
        for (let i = 0; i < carrito.listaProductos.length; i++) {
            if (carrito.listaProductos[i].producto.codigo == codigoProducto) {
                carrito.listaProductos.splice(i,1);
                const carr = await Carrito.findOneAndUpdate({_id:idCarrito},carrito, {new: true})
                console.log(carr);
                res.json({
                    succes: true,
                    idCarrito,
                    status: 'Producto eliminado del carrito'});
                return;
            }
        }
        res.json({status: 'El producto no estaba en el carrito'});
    }catch(err){    
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

//se obtienen los productos del carrito
router.post('/getCarrito',async(req,res)=>{
    const {idCarrito} = req.body;
    var carrito = await Carrito.findOne({_id:idCarrito});
    res.json({status: 'Productos obtenidos',idCarrito,productos:carrito.listaProductos});
})

//se realiza la compra de los productos del carrito

module.exports = router;
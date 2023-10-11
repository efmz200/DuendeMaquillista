const express = require('express');
const router =express.Router();
const Contenido = require('../models/modelo/Contenido');
const Categoria = require('../models/modelo/Categoria');
const SubCategoria = require('../models/modelo/SubCategoria');

router.get('/',async (req,res) => {
    const contenido =await Contenido.find({})
    console.log(contenido)
    res.json(contenido)
})

router.get('/Categorias',async (req,res) => {
    const categoria =await Categoria.find({})
    console.log(categoria)
    res.json(categoria)
});

router.get('/SubCategorias',async (req,res) => {
    const subcategoria =await SubCategoria.find({})
    console.log(subcategoria)
    res.json(subcategoria)
});

router.post('/SubCategorias', async (req,res) =>{
    try{
        const {categoria,nombre} = req.body;
        const cat = await Categoria.find({nombre:categoria})
        var subCats = [];
        for (var i = 0; i < cat.subcategorias.length; i++) {
            subCats.push(cat.subcategorias[i]);
        }
        res.json({
            status: true,
            subCats: subCats
        });
        
    }catch(err){        
        console.log(err)
        res.json({
            status:false,
            descripcion:'Hubo un error en la operación'
        })        
    }
});

router.post('/crearCategorias', async (req,res) =>{
    try{
        const {nombre} = req.body;
        const categoria = new Categoria({
            nombre
        })
        await categoria.save();
        console.log(categoria)
        res.json({
            status:'Categoria guardada'
        });
        
    }catch(err){        
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
});

router.post('/crearSubCategorias', async (req,res) =>{
    try{
        const {categoria,nombre} = req.body;
        const cat = await Categoria.find({nombre:categoria})
        const subcategoria = new SubCategoria({
            nombre
        })
        cat.subcategorias.push(subcategoria);
        await cat.save();
        console.log(cat)
        res.json({
            status:'SubCategoria guardada'
        });
        
    }catch(err){        
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
});
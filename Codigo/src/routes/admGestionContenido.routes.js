const express = require('express');
const router =express.Router();
const { mongoose } = require('./../database');
const Contenido = require('../models/modelo/Contenido');
const Categoria = require('../models/modelo/Contenido');
const SubCategoria = require('../models/modelo/Contenido');

router.get('/',async (req,res) => {
    const contenido =await Contenido.find({})
    console.log(contenido)
    res.json(contenido)
})

router.get('/Categorias',async (req,res) => {
    const categoria = await Categoria.find({})
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
        if (cat.length == 0){
            res.json({
                status: false,
                descripcion:'No hay subcategorias que mostrar'
            })
            return;
        }
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

router.post('/addCategorias', async (req,res) =>{
    try{
        const {nombre} = req.body;
        console.log(nombre)
        const categoria = new Categoria({
            nombre,
            subcategorias:[]
        });
        const cat = await Categoria.findOne({nombre:nombre})
        if (cat != null){
            res.json({
                status:'Categoria ya existe'
            });
            return;
        }
        await categoria.save();
        console.log(categoria)
        res.json({
            status:'Categoria guardada'
        });
        
    }catch(err){        
        console.log(err)
        if (err.code == 11000){
            res.json({
                status:'Categoria ya existe'
            });
        }else{
            res.json({
                status:'Hubo un error en la operación'
            })
        }      
    }
});

router.post('/addSubCategoria', async (req,res) =>{
    try{
        const {categoria,nombre} = req.body;        
        const subcategoria = new SubCategoria({
            nombre
        })
        cat = await Categoria.findOne({nombre:categoria})
        console.log(cat.subcategorias,categoria)
        if (cat.subcategorias.length !=0){
            for (var i = 0; i < cat.subcategorias.length; i++) {
                if (cat.subcategorias[i].nombre == nombre){
                    res.json({
                        status:'SubCategoria ya existe'
                    });
                    return;
                }
            }
        }
        cat.subcategorias.push(subcategoria);
        await Categoria.findByIdAndUpdate(cat._id,cat)
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

module.exports = router;
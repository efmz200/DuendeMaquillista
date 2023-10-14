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

//listar SubCategorias de una categoria
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

//crear categorias
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


//agregar subcategorias a una categoria
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



//agregar contenido
router.post('/registarContenido', async (req,res) =>{
    try{
        const {id,imagen,descripcion,categoria,subcategoria,palabrasClave,tags} = req.body;
        if (categoria == null){
            categoria = [];
        }
        if (subcategoria == null){
            subcategoria = [];
        }
        if (palabrasClave == null){
            palabrasClave = [];
        }
        if (tags == null){
            tags = [];
        }
        
        const contenido = new Contenido({
            id,
            imagen,
            descripcion,
            categoria,
            subcategoria,
            palabrasClave,
            tags
        })
        
        await contenido.save();
        console.log(contenido)
        res.json({
            status:'Contenido guardado'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//actualizar contenido
router.post('/actualizarContenido', async (req,res) =>{
    try{
        const {id,imagen,descripcion,categoria,subcategoria,palabrasClave,tags} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        contenido.imagen = imagen;
        contenido.descripcion = descripcion;
        contenido.categoria = categoria;
        contenido.subcategoria = subcategoria;
        contenido.palabrasClave = palabrasClave;
        contenido.tags = tags;
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Contenido actualizado'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});
//agregar palabra clave a un contenido
router.post('/addPalabrasClave', async (req,res) =>{
    try{
        const {id,palabraClave} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        contenido.palabrasClave.push(palabraClave);
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Palabras Clave guardadas'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//agregar tags a un contenido
router.post('/addTag', async (req,res) =>{
    try{
        const {id,tag} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        contenido.tags.push(tag);
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Tag guardado'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//eliminar tag de un contenido
router.post('/deleteTag', async (req,res) =>{
    try{
        const {id,tag} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        for (var i = 0; i < contenido.tags.length; i++) {
            if (contenido.tags[i] == tag){
                contenido.tags.pop(contenido.tags[i]);
            }
        }
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Tag eliminado'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//agregar categoria a un contenido
router.post('/addContenidoCategoria', async (req,res) =>{
    try{
        const {id,categoria} = req.body;
        const contenido = await Contenido.findOne({id:id})
        const cat = await Categoria.findOne({nombre:categoria})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        if (cat == null){
            res.json({
                status:'Categoria no existe'
            })
            return;
        }
        contenido.categoria.push(cat);
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Categoria guardada'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//agregar descripcion a un contenido
router.post('/addDescripcion', async (req,res) =>{
    try{
        const {id,descripcion} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        contenido.descripcion = descripcion;
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Descripcion guardada'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//eliminar palabra clave de un contenido
router.post('/deletePalabraClave', async (req,res) =>{
    try{
        const {id,palabraClave} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        for (var i = 0; i < contenido.palabrasClave.length; i++) {
            if (contenido.palabrasClave[i] == palabraClave){
                contenido.palabrasClave.pop(contenido.palabrasClave[i]);
            }
        }
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Palabra Clave eliminada'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});

//agregar imagen a un contenido
router.post('/addImagen', async (req,res) =>{
    try{
        const {id,imagen} = req.body;
        const contenido = await Contenido.findOne({id:id})
        if (contenido == null){
            res.json({
                status:'Contenido no existe'
            })
            return;
        }
        contenido.imagen = imagen;
        await Contenido.findByIdAndUpdate(contenido._id,contenido)
        console.log(contenido)
        res.json({
            status:'Imagen guardada'
        })
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })
    }
});



module.exports = router;
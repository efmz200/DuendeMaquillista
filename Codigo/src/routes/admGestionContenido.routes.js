const express = require("express");
const router = express.Router();
const ContenidoSchema = require("../models/modelo/Contenido");
const CategoriaSchema = require("../models/modelo/Categoria");
const SubCategoriaSchema = require("../models/modelo/SubCategoria");

//filtrar contenido
router.post("filtrarContenido", async (req, res) => {
    try {
        const { pPalabraClave, pCategoria, pSubCategoria } = req.body;
        var contenido = await ContenidoSchema.find({});
        var contenidoFiltrado = [];
        for (var i = 0; i < contenido.length; i++) {
            agregar = false;
            cont = contenido[i];
            for (var j = 0; j < contenido[i].palabrasClave.length; j++) {
                if (cont.palabrasClave[j] == pPalabraClave) {
                    agregar = true;
                }
            }
            for (var j = 0; j < contenido[i].categoria.length; j++) {
                if (cont.categoria[j] == pCategoria) {
                    agregar = true;
                }
            }
            for (var j = 0; j < contenido[i].subcategoria.length; j++) {
                if (cont.subcategoria[j] == pSubCategoria) {
                    agregar = true;
                }
            }
            if (agregar) {
                contenidoFiltrado.push(cont);
            }
        }
        return res.json(contenidoFiltrado);
    } catch (err) {
        console.log(err);
        res.json({
            status: false,
            descripcion: "Hubo un error en la operación",
        });
    }
});

//listar contenido
router.get("/getContenidos", async (req, res) => {
    const contenido = await ContenidoSchema.find({});
    console.log(contenido);
    res.json(contenido);
});

//listar categorias
router.get("/getCategorias", async (req, res) => {
    const categoria = await CategoriaSchema.find({});
    console.log(categoria);
    res.json(categoria);
});

//listar SubCategorias de una categoria
router.get("/getSubcategoria", async (req, res) => {
    try {
        const { categoria } = req.query;
        const cat = await CategoriaSchema.find({ nombre: categoria });
        
        if (cat.length === 0) {
            return res.json({
                status: false,
                descripcion: "No hay subcategorías que mostrar",
            });
        }

        const subCats = cat[0].subcategorias.map(subcategoria => subcategoria.nombre);

        res.json({
            status: true,
            subCats: subCats,
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: false,
            descripcion: "Hubo un error en la operación",
        });
    }
});

//crear categorias
router.post("/agregarCategorias", async (req, res) => {
    try {
        const { pNombreCategoria } = req.body;
        const categoria = new CategoriaSchema({
            nombre: pNombreCategoria,
            subcategorias: [],
        });
        /*const cat = await CategoriaSchema.findOne({ nombre: pNombreCategoria });
        if (cat != null) {
            res.json({
                success: false,
                status: "CategoriaSchema ya existe",
            });
            return;
        }*/
        await categoria.save();
        console.log(categoria);
        res.json({
            success: true,
            status: "CategoriaSchema guardada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//agregar subcategorias a una categoria
router.post("/agregarSubcategoria", async (req, res) => {
    try {
        const { categoria, nombre } = req.body;
        const subcategoria = new SubCategoriaSchema({
            nombre,
        });

        cat = await CategoriaSchema.findOne({ nombre: categoria });

        if (cat.subcategorias.length != 0) {
            for (var i = 0; i < cat.subcategorias.length; i++) {
                if (cat.subcategorias[i].nombre == nombre) {
                    res.json({
                        success: false,
                        status: "SubCategoriaSchema ya existe",
                    });
                    return;
                }
            }
        }
        cat.subcategorias.push(subcategoria);
        console.log(categoria, cat, "\n\n");
        await CategoriaSchema.findByIdAndUpdate(cat._id, cat);

        res.json({
            success: true,
            status: "SubCategoriaSchema guardada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//agregar palabra clave a un contenido
router.post("/agregarPalabraClave", async (req, res) => {
    try {
        const { idContenido, palabraClave } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                status: "ContenidoSchema no existe",
            });
            return;
        }
        contenido.palabrasClave.push(palabraClave);
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido);
        console.log(contenido);
        res.json({
            success: true,
            status: "Palabras Clave guardadas",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//agregar tags a un contenido
router.post("/agregarTag", async (req, res) => {
    try {
        const { idContenido, tag } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        contenido.tags.push(tag);
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido, {
            new: true,
        });
        console.log(contenido);
        res.json({
            success: true,
            status: "Tag guardado",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//editar descripcion
router.post("/editarDescripcion", async (req, res) => {
    try {
        const { idContenido, descripcion } = req.body;
        const contenido = await ContenidoSchema.findOneAndUpdate(
            { id: idContenido },
            { descripcion: descripcion }
        );
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        console.log(contenido);
        res.json({
            success: true,
            status: "Descripcion guardada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//eliminar palabra clave
router.post("/eliminarPalabraClave", async (req, res) => {
    try {
        const { idContenido, palabraClave } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        for (var i = 0; i < contenido.palabrasClave.length; i++) {
            if (contenido.palabrasClave[i] == palabraClave) {
                contenido.palabrasClave.splice(i, 1);
                var cont = await ContenidoSchema.findByIdAndUpdate(
                    contenido._id,
                    contenido,
                    { new: true }
                );
                console.log(cont);
                return res.json({
                    success: true,
                    status: "Palabra Clave eliminada",
                });
            }
        }
        res.json({
            success: false,
            status: "Palabra Clave no existe",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//eliminar palabra clave de un contenido --esta no es necesaria :p
router.post("/deletePalabraClave", async (req, res) => {
    try {
        const { id, palabraClave } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: id });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        for (var i = 0; i < contenido.palabrasClave.length; i++) {
            if (contenido.palabrasClave[i] == palabraClave) {
                contenido.palabrasClave.splice(i, 1);
            }
        }
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido);
        console.log(contenido);
        res.json({
            success: true,
            status: "Palabra Clave eliminada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//eliminar tag de un contenido
router.post("/eliminarTag", async (req, res) => {
    try {
        const { idContenido, tag } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        for (var i = 0; i < contenido.tags.length; i++) {
            if (contenido.tags[i] == tag) {
                contenido.tags.splice(i, 1);
                await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido);
                console.log(contenido);
                res.json({
                    success: true,
                    status: "Tag eliminado",
                });
            }
        }
        res.json({
            success: false,
            status: "Tag no existe",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//agregar imagen a un contenido
router.post("/agregarImagen", async (req, res) => {
    try {
        const { idContenido, imagen } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        contenido.imagen = imagen;
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido);
        console.log(contenido);
        res.json({
            success: true,
            status: "Imagen guardada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//actualizar imagen a un contenido
router.post("/actualizarImagen", async (req, res) => {
    try {
        const { idContenido, imagen } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "Contenido no existe",
            });
            return;
        }
        contenido.imagen = imagen;
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido);
        console.log(contenido);
        res.json({
            success: true,
            status: "Imagen actualizada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//agregar categoria a un contenido
router.post("/agregarContenidoCategoria", async (req, res) => {
    try {
        const { idContenido, categoria } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        const cat = await CategoriaSchema.findOne({ nombre: categoria });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        if (cat == null) {
            res.json({
                success: false,
                status: "CategoriaSchema no existe",
            });
            return;
        }
        contenido.categoria.push(cat);
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido);
        console.log(contenido);
        res.json({
            success: true,
            status: "CategoriaSchema guardada",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});


//eliminar contenido
router.post("/eliminarContenido", async (req, res) => {
    try {
        const { idContenido } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        await ContenidoSchema.findByIdAndDelete(contenido._id);
        console.log(contenido);
        res.json({
            success: true,
            status: "ContenidoSchema eliminado",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//actualizar contenido
router.post("/actualizarContenido", async (req, res) => {
    try {
        const {
            idContenido,
            imagen,
            descripcion,
            categoria,
            subcategoria,
            palabrasClave,
            tags,
        } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        if (imagen != null) {
            contenido.imagen = imagen;
        }
        if (descripcion != null) {
            contenido.descripcion = descripcion;
        }
        if (categoria != null) {
            contenido.categoria = categoria;
        }
        if (subcategoria != null) {
            contenido.subcategoria = subcategoria;
        }
        if (palabrasClave != null) {
            contenido.palabrasClave = palabrasClave;
        }
        if (tags != null) {
            contenido.tags = tags;
        }
        await ContenidoSchema.findByIdAndUpdate(contenido._id, contenido, {
            new: true,
        });
        console.log(contenido);
        res.json({
            success: true,
            status: "ContenidoSchema actualizado",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//agregar contenido
router.post("/registarContenido", async (req, res) => {
    var {
        idContenido,
        imagen,
        descripcion,
        categoria,
        subcategoria,
        palabrasClave,
        tags,
    } = req.body;
    const id = idContenido;
    console.log( {
        idContenido,
        imagen,
        descripcion,
        categoria,
        subcategoria,
        palabrasClave,
        tags,
    })
    try {
        if (categoria == null) {
            categoria = [];
        } else {
            cat = await CategoriaSchema.findOne({ nombre: categoria });
            if (cat == null) {
                const newCat = new CategoriaSchema({
                    nombre: categoria,
                });
                await newCat.save();
                categoria = newCat;
            } else {
                categoria = cat;
            }
        }
        if (subcategoria == null) {
            subcategoria = [];
        } else {
            subcategoria = [subcategoria];
        }
        if (palabrasClave == null) {
            palabrasClave = [];
        } else {
            palabrasClave = palabrasClave;
        }
        if (tags == null) {
            tags = [];
        } else {
            tags = tags;
        }
        const contenido = new ContenidoSchema({
            id,
            imagen: imagen,
            descripcion: descripcion,
            categoria: categoria,
            subcategoria: subcategoria,
            palabrasClave: palabrasClave,
            tags: tags,
        });
        await contenido.save();
        console.log(contenido);
        res.json({
            success: true,
            status: "ContenidoSchema guardado",
        });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

//obtener publucación por id
router.post("/getPublicacion", async (req, res) => {
    try {
        const { idContenido } = req.body;
        const contenido = await ContenidoSchema.findOne({ id: idContenido });
        if (contenido == null) {
            res.json({
                success: false,
                status: "ContenidoSchema no existe",
            });
            return;
        }
        console.log(contenido);
        res.json({ contenido: contenido, success: true });
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            status: "Hubo un error en la operación",
        });
    }
});

module.exports = router;

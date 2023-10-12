const mongoose = require('mongoose');
const {Schema} = mongoose;
//const SubsCategoriaSchema = require('./SubCategoria.js');
//const CategoriasSchema = require('./Categoria.js');

const SubCategoriaSchema = new Schema({
    nombre: {type: String, required: true},
});

const CategoriaSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    subcategorias: {
        type: [SubCategoriaSchema],
        default: []
      }
});

const ContenidoSchema = new Schema({
    id: {type: Number, required: true},
    imagen: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: {type:[CategoriaSchema],default: []},    
    subcategoria:{type:[SubCategoriaSchema],default: []},
    palabrasClave: {type: [String], required: true},
    tags: {type: [String], required: true}
});

module.exports = mongoose.model('Contenido',ContenidoSchema)
module.exports = mongoose.model('SubCategoria',SubCategoriaSchema)
module.exports = mongoose.model('Categoria',CategoriaSchema)

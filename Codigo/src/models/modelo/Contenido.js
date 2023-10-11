const mongose = require('mongoose');
const {Schema} = mongose;
const SubCategoriaSchema = require('./SubCategoria.js');
const CategoriaSchema = require('./Categoria.js');

const ContenidoSchema = new Schema({
    id: {type: Number, required: true},
    imagen: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: [CategoriaSchema],
    subcategoria:[SubCategoriaSchema],
    palabrasClave: {type: [String], required: true},
    tags: {type: [String], required: true}
});

module.exports = mongose.model('Contenido',ContenidoSchema)

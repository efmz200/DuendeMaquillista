const mongoose = require('mongoose');
const {Schema} = mongoose;
const SubCategoriaSchema = require('./SubCategoria.js');
const CategoriaSchema = require('./Categoria.js');

const ContenidoSchema = new Schema({
    id: {type: Number, undefined: true, unique: true, required: true},
    imagen: {type: String, default: ''},
    descripcion: {type: String, default: ''},
    categoria: {type:[Object],default: []},    
    subcategoria:{type:[Object],default: []},
    palabrasClave: {type: [String], default: []},
    tags: {type: [String], default: []}
});


module.exports = mongoose.model("Contenido",ContenidoSchema);
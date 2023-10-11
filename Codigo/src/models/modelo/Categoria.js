const mongose = require('mongoose');
const {Schema} = mongose;
const SubCategoriaSchema = require('./SubCategoria.js');


const CategoriaSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    subcategorias: [SubCategoriaSchema]
});

module.exports = mongose.model('Categoria',CategoriaSchema)
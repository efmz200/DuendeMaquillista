const mongoose = require('mongoose');
const {Schema} = mongoose;
const SubCategoriaSchema = require('./SubCategoria.js');

const CategoriaSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    subcategorias: {
        type: [Object],
        default: []
      }
});

module.exports = mongoose.model("Categoria",CategoriaSchema);

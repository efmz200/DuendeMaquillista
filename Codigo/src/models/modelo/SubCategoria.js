

const mongoose = require('mongoose');
const {Schema} = mongose;

const SubCategoriaSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
});

module.exports = mongose.model('SubCategoria',SubCategoriaSchema)
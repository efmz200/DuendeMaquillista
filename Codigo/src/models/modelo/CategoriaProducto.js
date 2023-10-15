const mongoose = require('mongoose');
const {Schema} = mongoose;

const CategoriaProductoSchema = new Schema({
    nombre: {type: String, default: '', unique: true},
    Productos: {type:[Object],default: []}
});


module.exports = mongoose.model("CategoriaProducto",CategoriaProductoSchema);
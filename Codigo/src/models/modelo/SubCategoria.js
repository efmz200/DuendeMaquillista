const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubCategoriaSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
});


module.exports = mongoose.model("SubCategorias",SubCategoriaSchema);

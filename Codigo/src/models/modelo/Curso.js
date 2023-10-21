const mongoose = require('mongoose');
const {Schema} = mongoose;

const CursoSchema = new Schema({
    nombre: {type: String, default: ''},
    notas: {type: String, default: ''}
});

module.exports = mongoose.model("Curso",CursoSchema);
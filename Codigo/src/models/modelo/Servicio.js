const mongoose = require('mongoose');
const {Schema} = mongoose;

const ServicioSchema = new Schema({
    nombre: {type: String, default: ''},
    telefono: {type: Number, default: 0},
    notas: {type: String, default: ''},
    imagen: {type: String, default: ''}
});

module.exports = mongoose.model("Servicio",ServicioSchema);

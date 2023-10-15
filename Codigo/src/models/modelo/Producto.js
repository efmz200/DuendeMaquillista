const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    codigo: {type: String, undefined: true, unique: true, required: true},
    nombre: {type: String, default: ''},
    precio: {type: Number, default: 0},
    disponibilidad: {type: Number, default: 0},
    descripcion: {type: String, default: ''},
    imagen: {type: String, default: ''},
});
const mongoose = require('mongoose');
const {Schema} = mongoose;

const ActividadSchema = new Schema({
    fecha: {type: Date, default: null},
    descripcion: {type: String, default: ''},
    tipo: {type: Object, default: null}
});

module.exports = mongoose.model("Actividad",ActividadSchema);
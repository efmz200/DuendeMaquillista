const mongoose = require('mongoose');
const {Schema} = mongoose;

const AgendaSchema = new Schema({
    fecha: {type: Date, default: ''},
    duracionHoras: {type: Number, default: 0},
    duracionMinutos: {type: Number, default: 0},
    asunto: {type: String, default: ''},
    estado: {type: String, default: ''},
    correoSolicitante: {type: String, default: ''},//correo
});

module.exports = mongoose.model('Agenda',AgendaSchema);

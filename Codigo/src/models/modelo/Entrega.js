const mongoose = require('mongoose');
const {Schema} = mongoose;

const EntregaSchema = new Schema({
    numeroFactura : {type: Number, default: 0},
    estado : {type: String, default: ''}
});

module.exports = mongoose.model("Entrega",EntregaSchema);
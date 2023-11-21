const mongoose = require('mongoose');
const {Schema} = mongoose;

const FacturaSchema = new Schema({
    numeroFactura: {type: Number, default: 0},
    detalleCompra: {type: String, default: null},
    fecha: {type: Date, default: Date.now()},
    total: {type: Number, default: 0},
    direccion: {type: Object, default: null},
    estado: {type: String, default: 'Pendiente'},
    comprobante: {type: String, default: null} // dice que deberia ser tipo imagen
});

module.exports = mongoose.model("Factura",FacturaSchema);
const mongoose = require('mongoose');
const {Schema} = mongoose;

//emisor y receptor son correos
const NotificacionSchema = new Schema({
    emisor: {type: String, required: true},
    receptor: {type: String, required: true},
    mensaje: {type: String, required: true},
    emisorNotificado: {type: Boolean, default: false},
    receptorNotificado: {type: Boolean, default: false}
});

module.exports = mongoose.model('Notificacion',NotificacionSchema);
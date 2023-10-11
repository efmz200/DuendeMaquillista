const mongose = require('mongoose');
const {Schema} = mongose;

const UsuarioSchema = new Schema({
    nombre: {type: String, required:true},
    apellido:{type: String, required: true},
    correo:{type: String, required: true,unique: true},
    contrasena:{type: String, required: true},
    nacimiento:{type: Date, required: true},
    telefono:{type: Number , required: true},
    genero:{type: String, required: true}
});

module.exports = mongose.model('Usuario',UsuarioSchema)
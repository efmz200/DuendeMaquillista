const mongoose = require('mongoose');
const {Schema} = mongoose;

const CantonSchema = new Schema({
    nombre: {type: String, default: ''},
    listaDistritos: {type: [Object], default: []}
});

module.exports = mongoose.model("Canton",CantonSchema);

const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProvinciaSchema = new Schema({
    nombre: {type: String, default: ''},
    listaCantones: {type: [Object], default: []}
});

module.exports = mongoose.model("Provincia",ProvinciaSchema);
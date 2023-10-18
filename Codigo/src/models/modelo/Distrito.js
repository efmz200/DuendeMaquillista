const mongoose = require('mongoose');
const {Schema} = mongoose;

const DistritoSchema = new Schema({
    nombre: {type: String, default: ''}
});

const Distrito = mongoose.model("Distrito",DistritoSchema);
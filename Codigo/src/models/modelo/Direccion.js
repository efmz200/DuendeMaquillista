const mongoose = require('mongoose');
const {Schema} = mongoose;

const DireccionSchema = new Schema({
    provincia: {type: String, default: ''},
    canton: {type: Object, default: null},
    distrito: {type: Object, default: null},
    direccion: {type: Object, default: null}
});

module.exports = mongoose.model("Direccion",DireccionSchema);
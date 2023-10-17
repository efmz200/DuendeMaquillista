
const mongoose = require('mongoose');
const {Schema} = mongoose;

const CarritoSchema = new Schema({
    listaProductos : [{
        cantidad: {type:Number,default:0},
        producto: {type:Object,default:null}
    }]
});

module.exports = mongoose.model("Carrito",CarritoSchema);
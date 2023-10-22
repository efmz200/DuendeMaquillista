const express   = require('express');
const router    = express.Router();
const Actividad = require('../models/modelo/Actividad');
const Curso     = require('../models/modelo/Curso');
const Servicio  = require('../models/modelo/Servicio');
const Entrega   = require('../models/modelo/Entrega');

function Factory(type, data) {   

    var actividadConcreta;
    if (type === "Curso") {
        actividadConcreta = new Curso({
            nombre: data.nombre,
            notas: data.notas
        });
    } else if (type === "Servicio") {
        actividadConcreta = new Servicio({
            nombre: data.nombre,
            telefono: data.telefono,
            notas: data.notas,
            imagen: data.imagen
        });
    } else if (type === "Entrega") {
        actividadConcreta = new Entrega({
            numeroFactura : data.numeroFactura,
            estado: data.estado
        });
    }
    actividad = new Actividad({
        fehca : data.fecha,
        descripcion : data.descripcion,
        actividadConcreta : actividadConcreta
    });
    return actividad;
    
}

module.export = {Factory};
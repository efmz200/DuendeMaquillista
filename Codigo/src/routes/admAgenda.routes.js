const express   = require('express');
const router    = express.Router();
const Actividad = require('../models/modelo/Actividad');
const Factory   = require('../models/modelo/AbstractCreator');

//fechas formato AAAA-MM-DD
//agendar curso
router.post('/agendarCurso',async(req,res)=>{
    try{
        const {pFecha,pDescripcion,pNombre,pNotas} = req.body;
        data = {
            fecha: pFecha,
            descripcion: pDescripcion,
            nombre: pNombre,
            notas: pNotas
        }
        var actividad = Factory("Curso",data);
        await actividad.save();
        res.json({status: 'Curso guardado'});
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
});

//agendar Entrega
router.post('/agendarEntrega',async(req,res)=>{
    try{
        const {pFecha,pDescripcion,pNumeroFactura} = req.body;
        data = {
            fecha: pFecha,
            descripcion: pDescripcion,
            numeroFactura: pNumeroFactura,
            estado: "Pendiente"
        }
        var actividad = Factory("Entrega",data);
        await actividad.save();
        res.json({status: 'Entrega guardada'});
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
})


//agendar Servicio
router.post('/agendarServicio',async(req,res)=>{
    try{
        const {pFecha,pDescripcion,pNombre,pTelefono,pNotas,pImagen} = req.body;
        data = {
            fecha: pFecha,
            descripcion: pDescripcion,
            nombre: pNombre,
            telefono: pTelefono,
            notas: pNotas,
            imagen: pImagen
        }
        var actividad = Factory("Servicio",data);
        await actividad.save();
        res.json({status: 'Servicio guardado'});
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }
})

//cambiar Estado
router.post('/cambiarEstado',async(req,res)=>{
    try{
        const {pNumeroFactura,pEstado} = req.body;
        var actividades = await Actividad.find({});
        for (let i = 0; i < actividades.length; i++) {
            if(actividades[i].actividadConcreta.numeroFactura == pNumeroFactura){
                actividades[i].actividadConcreta.estado = pEstado;
                idActividad = actividades[i]._id;
                const actividad = await Actividad.findOneAndUpdate({_id: idActividad},actividades[i], {new: true})
                console.log(actividad)
                res.json({status: 'Estado actualizado'});
                return
            }
        }
        res.json({status: 'No se encontro la entrega'});
    }catch{
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }    
})

//get Agenda
router.get('/getAgenda',async(req,res)=>{
    try{
        var actividades = await Actividad.find({});
        res.json({status: 'Agenda encontrada',agenda: actividades});
    }catch{
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }    
})

module.exports = router;
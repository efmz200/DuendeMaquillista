const express   = require('express');
const router    = express.Router();
const Actividad = require('../models/modelo/Actividad');
const Factory   = require('../models/modelo/AbstractCreator');
const Agenda = require ('../models/modelo/Agenda');
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
        const {Fecha,Descripcion,Nombre,Telefono,Notas,Imagen} = req.body;
        data = {
            fecha: Fecha,
            descripcion: Descripcion,
            nombre: Nombre,
            telefono: Telefono,
            notas: Notas,
            imagen: Imagen
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


//DESDE AQUI II INTEGRACIÓN
router.post('/filtrarPor',async(req,res)=>{
    try{
        var agenda;
        //filtro puede ser dia, mes, semana
        const {filtro,dia,mes,semana} = req.body;

        switch (filtro){
            case 'dia':
                if (dia == null){
                    res.json({
                        succes:false,
                        status: 'No se ingreso un dia'
                    });
                }
                agenda = Agenda.find({
                    $expr: {
                        $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: dia }]
                    }
                })

                break;
            case 'mes':
                if (mes == null){
                    res.json({status: 'No se ingreso un mes'});
                }
                agenda = Agenda.find({
                    $expr: {
                        $eq: [{ $month: "$fecha" }, { $month: mes }]
                    }
                })
                break;
            case 'semana':
                if (semana == null){
                    res.json({
                        succes: false,
                        status: 'No se ingreso una semana'});
                }
                agenda = Agenda.find({
                    $expr: {
                        $eq: [{ $week: "$fecha" }, { $week: semana }]
                    }
                })
                break;
            default:
                res.json({
                    succes:false,
                    status: 'No se ingreso un filtro'
                });
                break;
        }
        res.json({
            succes: true,
            status: 'Agenda encontrada',
            agenda: agenda
        });
        
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }    
})

router.post('/agregar',async(req,res)=>{
    try{
        const {Fecha,DuracionHoras,DuracionMinutos,Asunto,Estado,CorreoSolicitante} = req.body;
        data = {
            fecha: Fecha,
            duracionHoras: DuracionHoras,
            duracionMinutos: DuracionMinutos,
            asunto: Asunto,
            estado: Estado,
            correoSolicitante: CorreoSolicitante
        }
        var agenda = new Agenda(data);
        //aca debo verificar colisiones
        await agenda.save();
        res.json({
            succes: true,
            status: 'Agenda guardada'
        });
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

router.post('/borrar',async(req,res)=>{
    try{
        const {fecha,asunto,correoSolicitante} = req.body;
        await Agenda.findOneAndDelete({fecha: fecha,asunto: asunto,correoSolicitante: correoSolicitante});
        //await Agenda.findByIdAndDelete(idAgenda);
        res.json({
            succes: true,
            status: 'Agenda eliminada'
        });
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

router.post('/editar',async(req,res)=>{
    try{
        const {fechaOriginal,asuntoOriginal,correoSolicitanteOriginal,//datos para buscar la agenda anterior
                fecha,Descripcion,Nombre,Telefono,Notas,Imagen } = req.body;    //datos actualizados
        data = {
            fecha: Fecha,
            descripcion: Descripcion,
            nombre: Nombre,
            telefono: Telefono,
            notas: Notas,
            imagen: Imagen
        }
        const actualizado = await Agenda.findOneAndUpdate({fecha: fechaOriginal,asunto: asuntoOriginal,correoSolicitante: correoSolicitanteOriginal},data, {new: true});
        res.json({
            succes: true,
            status: 'Agenda actualizada',
            agenda: actualizado
        });
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })
    }
})

router.post('/actualizarEstado',async(req,res)=>{
    try{
        const {fecha,asunto,correoSolicitante,estado} = req.body;
        const actualizado = await Agenda.findOneAndUpdate({fecha: fecha,asunto: asunto,correoSolicitante: correoSolicitante},{estado: estado}, {new: true});
        res.json({
            succes: true,
            status: 'Agenda actualizada',
            agenda: actualizado
        });
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })
    }
})

router.post('/verTodas',async(req,res)=>{
    try{
        const todas = await Agenda.find({});
        res.json({
            succes: true,
            status: 'Agenda encontrada',
            agenda: todas
        });
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })
    }
})

router.post('/verUna',async(req,res)=>{
    try{
        const {fecha,asunto,correoSolicitante} = req.body;
        const agenda = await Agenda.findOne({fecha: fecha,asunto: asunto,correoSolicitante: correoSolicitante});
        res.json({
            succes: true,
            status: 'Agenda encontrada',
            agenda: agenda
        });
    }catch{
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })
    }
})

module.exports = router;
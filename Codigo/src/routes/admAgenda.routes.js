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
    }catch(err){
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
    }catch(err){
        console.log(err)
        res.json({
            status:'Hubo un error en la operación'
        })        
    }    
})


//DESDE AQUI II INTEGRACIÓN
//las fechas se arman con fecha y hora 
//2020-10-12T00:00:00
//No usado
router.post('/filtrarPorNOUsado',async(req,res)=>{
    try{
        var agenda;
        //filtro puede ser dia, mes, semana
        const {filtro,fecha} = req.body;
        if (fecha == null){
            res.json({
                succes: false,
                status: 'No se ingreso una fecha para filtrar'});
        }
        console.log(filtro,fecha)
        switch (filtro){
            case 'dia':
                
                agenda = await Agenda.find({
                    $expr: {
                        $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: fecha }]
                    }
                })

                break;
            case 'mes':
                
                agenda = await Agenda.find({
                    $expr: {
                        $eq: [{ $month: "$fecha" }, { $month: fecha }]
                    }
                })
                break;
            case 'semana':
                
                agenda = await Agenda.find({
                    $expr: {
                        $eq: [{ $week: "$fecha" }, { $week: fecha }]
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
        
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }    
})

function filtroDia(fecha){
    agenda = Agenda.find({
        $expr: {
            $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(fecha) }]
        }
    }); 
    return agenda;   
}

function filtroMes(fecha){
    agenda = Agenda.find({
        $expr: {
            $eq: [{ $month: "$fecha" }, { $month: new Date(fecha) }]
        }
    });
    return agenda;
}

function filtroSemana(fecha){
    agenda = Agenda.find({
        $expr: {
            $eq: [{ $week: "$fecha" }, { $week: new Date(fecha) }]
        }
    });
    return agenda;
}

router.post('/filtrarPor', async (req, res) => {
    try {
        const { filtro, fecha } = req.body;
        if (fecha == null) {
            return res.json({
                succes: false,
                status: 'No se ingresó una fecha para filtrar'
            });
        }

        let agenda;

        switch (filtro) {
            case 'dia':
                agenda = await filtroDia(fecha);
                break;
            case 'mes':
                agenda = await filtroMes(fecha);                
                break;
            case 'semana':
                agenda = await filtroSemana(fecha);
                await Agenda.find({
                    $expr: {
                        $eq: [{ $week: "$fecha" }, { $week: new Date(fecha) }]
                    }
                });
                break;
            default:
                return res.json({
                    succes: false,
                    status: 'No se ingresó un filtro'
                });
        }

        return res.json({
            succes: true,
            status: 'Agenda encontrada',
            agenda: agenda
        });

    } catch (err) {
        console.log(err);
        return res.json({
            succes: false,
            status: 'Hubo un error en la operación'
        });
    }
});

function verificarChoqueHorarios(evento1, evento2) {
    const fechaInicio1 = new Date(evento1.fecha);
    const fechaFin1 = new Date(fechaInicio1.getTime() + evento1.duracionHoras * 60 * 60 * 1000 + evento1.duracionMinutos * 60 * 1000);
    const fechaInicio2 = new Date(evento2.fecha);
    const fechaFin2 = new Date(fechaInicio2.getTime() + evento2.duracionHoras * 60 * 60 * 1000 + evento2.duracionMinutos * 60 * 1000);
  
    if ((fechaInicio1 < fechaFin2 && fechaFin1 > fechaInicio2) || (fechaInicio2 < fechaFin1 && fechaFin2 > fechaInicio1)) {
      return "Hay choque de horarios";
    } else {
      return "No hay choque de horarios";
    }
}

//ver bien
router.post('/agregar',async(req,res)=>{
    try{
        const {Fecha,DuracionHoras,DuracionMinutos,Asunto,Estado,CorreoSolicitante} = req.body;
        data = {
            fecha: Fecha,
            duracionHoras: DuracionHoras,
            duracionMinutos: DuracionMinutos,
            estado: Estado,
            correoSolicitante: CorreoSolicitante
        }
        var agendas = await Agenda.find({});
        for (let i = 0; i < agendas.length; i++) {
            if(verificarChoqueHorarios(agendas[i],data) == "Hay choque de horarios"){
                if(agendas[i].asunto == "maquillaje" || data.asunto == "maquillaje"){
                    res.json({
                        succes: false,
                        status: 'Hay choque de horarios con un maquillaje'
                    });
                    return
                }
                data.estado = "Pendiente";
                var agenda = new Agenda(data);
                res.json({
                    succes: false,
                    status: 'El horario esta ocupado, se agendo como pendiente'
                });
                return
            }
        }
        data.estado = "Aceptado";
        var agenda = new Agenda(data);
        //aca debo verificar colisiones
        await agenda.save();
        res.json({
            succes: true,
            status: 'Agenda guardada'
        });
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })        
    }
})

router.post('/borrar',async(req,res)=>{
    try{
        var {fecha,asunto,correoSolicitante} = req.body;
        console.log(fecha,asunto,correoSolicitante)
        await Agenda.findOneAndDelete({fecha: fecha,asunto: asunto,correoSolicitante: correoSolicitante});
        res.json({
            succes: true,
            status: 'Agenda eliminada'
        });
    }catch(err){
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
                fecha,duracionHoras,duracionMinutos,asunto,estado,correoSolicitante } = req.body;    //datos actualizados
        data = {
            fecha: fecha,
            duracionHoras: duracionHoras,
            duracionMinutos: duracionMinutos,
            asunto: asunto,
            estado: estado,
            correoSolicitante: correoSolicitante
        }
        const actualizado = await Agenda.findOneAndUpdate({fecha: fechaOriginal,asunto: asuntoOriginal,correoSolicitante: correoSolicitanteOriginal},data, {new: true});
        res.json({
            succes: true,
            status: 'Agenda actualizada',
            agenda: actualizado
        });
    }catch(err){
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
    }catch(err){
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
    }catch(err){
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
    }catch(err){
        console.log(err)
        res.json({
            succes: false,
            status:'Hubo un error en la operación'
        })
    }
})

module.exports = router;
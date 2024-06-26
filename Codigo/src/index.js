const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
//const fileRoutes = require('./routes/file-upload-routes')
//minto 14 parte 2


const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000)

//funciones antes de las rutas
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/tasks',require('./routes/task.routes'));
app.use('/api/usuario',require('./routes/admUsuario.routes'));
app.use('/api/contenido',require('./routes/admGestionContenido.routes'));
app.use('/api/agenda',require('./routes/admAgenda.routes'));
app.use('/api/productos',require('./routes/admProductos.routes'));
app.use('/api/notificaciones',require('./routes/admCentroNotificaciones.routes'));

//app.use('/front/FrLogin',require('./app/RfrLogin.routes'));



//app.use('/api/usuarios',require('./routes/Usuario.rutas'));
//app.use('/api',fileRoutes.routes);

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')))
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
console.log(__dirname)
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});





//iniciando seervidor
app.listen(app.get('port'),()=>{
    console.log(`Server en el puerto ${app.get('port')}`);
    console.log("hola")
})
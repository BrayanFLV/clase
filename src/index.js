const  express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


//inicio
const app=express();

app.use(express.static(__dirname + '/public'));

//configuracion
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs ({
    defaultLayout:'main',
    
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');
//peticiones

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});

//rutas
app.use('/static', express.static(__dirname + '/public'));
app.use(require('./routes'));
app.use(require('./routes/autentication'));
app.use('/links',require('./routes/links'));
app.use('/docentes',require('./routes/docentes'));
app.use('/estudiantes',require('./routes/estudiantes'));
app.use('/usuarios',require('./routes/usuarios'));
app.use('/clientes',require('./routes/home'));
app.use('/clientes',require('./routes/productos'));
app.use('/clientes',require('./routes/contacto'));
app.use('/clientes',require('./routes/carrito'));
app.use('/clientes',require('./routes/chekout'));
app.use('/clientes',require('./routes/loguin'));
app.use('/Administrador',require('./routes/usuarios'));
app.use('/Administrador',require('./routes/productosAdmin'));

//public
app.unsubscribe(express.static(path.join(__dirname,'public')));

//iniciar server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

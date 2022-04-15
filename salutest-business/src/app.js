const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const mysqlstore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');

const { database } = require('./keys');

const app = express();
require('./lib/passport');

/// archivos compartidos
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpres: require('./lib/handlebars')
}));

app.set('view engine', '.hbs');


/// archivos compartidos

//midlewars
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(session({
    secret: 'Salutest',
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname, 'public')));
//public


//routers
app.use(require('./rutas/services'))
app.use(require('./rutas/job'))
app.use(require('./rutas/registro'))
app.use(require('./rutas/login'))
app.use(require('./rutas/profile'))
app.use(require('./rutas/inquiries'))
app.use(require('./rutas/settings'))
app.use(require('./rutas/record'))
app.use(require('./rutas/diagnosis'))
app.use(require('./rutas/test'))
app.use(require('./rutas/peso'))
app.use(require('./rutas/cita_home'))
app.use(require('./rutas/cita_cp_1'))
app.use(require('./rutas/cita_cp_2'))
app.use(require('./rutas/cita_ci_1'))
app.use(require('./rutas/cita_meet'))
app.use(require('./rutas/salud_home'))
app.use(require('./rutas/registro_c'))
app.use(require('./rutas/chat'))
app.use(require('./rutas/especialidades'))
app.use(require("./rutas/solicitud"));
app.use(require("./rutas/instituciones_medicas"));

module.exports = app;
const express = require('express');
const rutas = express.Router();

const {mostrarRegistro,Registro,Login,logout,mostrarLogin} = require('../controllers/registro.controlador');
const {check_notlogin} = require('../lib/auth');


rutas.get('/login',check_notlogin,mostrarLogin);

rutas.post('/login', Login);

rutas.get('/registro',check_notlogin, mostrarRegistro);

rutas.post('/registro', Registro);

rutas.get('/logout', logout);


module.exports = rutas;
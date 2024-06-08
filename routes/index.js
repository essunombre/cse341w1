const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.homeRoute);
routes.get('/andrea', lesson1Controller.andreaRoute);
routes.get('/jose', lesson1Controller.joseRoute);
routes.get('/jacob', lesson1Controller.jacobRoute);

module.exports = routes;
console.log('soy el web server')

// express web server

const express = require('express');
const app = express();

const port = 3000

app.use('/', require('./routes'))

app.listen(process.env.port || port);
console.log('Web server is listing at port ' + (process.env.port || port));

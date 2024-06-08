console.log('soy el web server')

// express web server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi this is home ');
});

app.get('/jose', (req, res) => {
    res.send('Jose David');
});

app.get('/jacob', (req, res) => {
    res.send('Jacob');
});

const port = 3000

app.listen(process.env.port || port);
console.log('Web server is listing at port ' + (process.env.port || port));

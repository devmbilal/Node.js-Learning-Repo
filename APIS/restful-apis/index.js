//Modules
const config = require('config');
const express = require('express');
const Joi = require('joi');
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

//Imports
const courses = require('./routes/courses');
const home = require('./routes/home');

//Templating Engine
app.set('view engine', 'pug'); 
app.set('views', './views'); //default

// Middle Ware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(logger);
app.use(helmet()); 
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

//Routes Middleware
app.use('/api/courses', courses);
app.use('/',home);

// Configuration 
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
//console.log('Mail Password: ' + config.get('mail.password'));

// Db work...
dbDebugger('Connected to the database...');


// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App listening on port 3000!');
});


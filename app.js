'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes');
var swig = require('swig');
var morgan = require('morgan');
var path = require('path');

// Template Boilerplate
app.engine('html', swig.renderFile); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
app.set('views', path.join(__dirname, '/views')); // where to find the views
swig.setDefaults({ cache: false });

// Middleware
app.use(morgan('dev'));

// Body Parser Stuff
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000);

app.use(express.static(path.join(__dirname, '/public')));

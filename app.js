// ./app.js

const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(routes);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error('The requested page couldn\'t be found.');
    err.status = 404;
    next(err);
  });
  
  // TODO Add custom error handlers.

module.exports = app;
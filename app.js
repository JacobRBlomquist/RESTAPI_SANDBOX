const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');

//set up logging / errors
app.use(morgan('dev'))

//security
app.use(helmet());
app.disable('x-powered-by');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')

// Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "Home Page!"
    });
});

//404  no route
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});


//error handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
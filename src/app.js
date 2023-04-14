
require('dotenv').config();
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();


//init middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));


//init db
require(`./dao/init.mongodb`);
// const{ countConnect} =require('./utils/check.connect');
// countConnect();
//init routers
app.use('/',require('./routers'))


//handling err





module.exports=app;
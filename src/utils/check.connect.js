'use strict'
const mongoose = require("mongoose")
const os = require('os');
const process = require('process');
const { setInterval } = require("timers");


const _SECONDS =5000;

const countConnect =()=>{
    const numConnection = mongoose.connections.length;
    console.log(`number of connection to DB: ${numConnection}`);
};

const checkOverload = ()=>{
    setInterval(()=>{
        const numConnection=mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage/1024/1024} MB`);
    },_SECONDS);
}


module.exports={
    countConnect,
    checkOverload
}
'use current';
const winston = require('winston');
const fileTransport = winston.transports.File;
const UDPTransport = require('winston-udp').UDP;

module.exports ={
    File:fileTransport,
    UDP: UDPTransport
    
};
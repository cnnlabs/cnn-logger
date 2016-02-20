'use strict';

const winston = require('winston'),
    fileTransport = winston.transports.File,
    UDPTransport = require('winston-udp').UDP;

module.exports = {
    File: fileTransport,
    UDP: UDPTransport
};

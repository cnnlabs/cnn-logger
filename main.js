'use strict';

const winston =require('winston');
const winstonUDP = require('winston-udp');
const transports = require('./transports');


class Logger {
    constructor() {
        this.logger = new (winston.Logger)();
    }
    addTransport(level, transport, opts){
        this.logger.add(
            transport,
            Object.assign({}, {
                level: level || 'info'
            }, opts)
        );

    }
    addHTTP(level, opts){
        if (this.logger.transports.http) {
            return;
        }
        this.logger.add(
            winston.transports.Http,
            Object.assign({}, {
                level: level || 'info'
            }, opts)
        );
    }
    addUDP(level, opts){
        if (this.logger.transports.http) {
            return;
        }
        this.logger.add(
            winston.transports.UDP,
            Object.assign({}, {
                level: level || 'info'
            }, opts)
        );
    }
    removeUDP(){
        if (!this.logger.transports.udp) {
            return;
        }
        this.logger.remove('udp');
    }
    removeHTTP(){
        if (!this.logger.transports.http) {
            return;
        }
        this.logger.remove('http');
    }
    addConsole(level, opts) {
        if (this.logger.transports.console) {
            return;
        }
        this.logger.add(
            winston.transports.Console,
            Object.assign({}, {
                level: level || 'info'
            }, opts)
        );
    }

    removeConsole() {
        if (!this.logger.transports.console) {
            return;
        }
        this.logger.remove('console');
    }

    clearLoggers() {
        Object.keys(this.logger.transports)
        .forEach(logger => this.logger.remove(logger));
    }
    transports(){
        return transports;
    }
}



const logger = new Logger();
let consoleLoggerLevel;
if(process.env.NODE_ENV === 'test') {
    consoleLoggerLevel = 'error';
} else {
    consoleLoggerLevel = process.env.CONSOLE_LOGGER_LEVEL || 'silly';
}
logger.addConsole(consoleLoggerLevel);

module.exports= logger;
module.exports.winston = winston;

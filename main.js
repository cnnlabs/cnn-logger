'use strict';

const winston =require('winston');


class Logger {
    constructor() {
        this.logger = new (winston.Logger)();
    }
    addTrasport(level, transport, opts){
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
}



const logger = new Logger();
let consoleLoggerLevel;
if(process.env.NODE_ENV === 'test') {
    consoleLoggerLevel = 'error';
} else {
    consoleLoggerLevel = process.env.CONSOLE_LOGGER_LEVEL || 'silly';
}
logger.addConsole(consoleLoggerLevel);

module.exports = logger;

'use strict';
const LogLevelChecker = require('./utils/log_level_checker'),
    LogzioLogger = require('./utils/logzio_wrapper');

class CNNLogger {
    constructor() {
        let config = null;

        // This code is to make this a drop in replacement of the NPM package Debug's pattern matching logging.
        if (arguments.length == 2 && typeof arguments[0] === 'string') {
            config = arguments[1] || {};
            config.DEBUG_TARGET = arguments[0];
        } else {
            config = arguments[0] || {};
        }

        this.config = Object.assign({
            LOG_LEVEL: config.LOG_LEVEL || process.env.LOG_LEVEL || 'off',
            LOGZIO_LOG_LEVEL: config.LOGZIO_LOG_LEVEL || process.env.LOGZIO_LOG_LEVEL || process.env.LOG_LEVEL || 'off',
            LOGZIO_TOKEN: config.LOGZIO_TOKEN || process.env.LOGZIO_TOKEN || null,
            TAG: config.TAG || process.env.TAG || 'cnn-logger',
            /* Question: do we want to have target tags, this brings the functionality of the 
               debug node module that allows us to target specific tags for logging by providing a regex. */
            DEBUG: config.DEBUG || process.env.DEBUG || null,
            DEBUG_TARGET: config.DEBUG_TARGET || process.env.DEBUG_TARGET || null,
            ENVIRONMENT: config.ENVIRONMENT || process.env.ENVIRONMENT || process.env.NODE_ENV || 'not provided'
        }, config);
        this._logLevelChecker = new LogLevelChecker(this.config.LOG_LEVEL);
        this._logzioLogLevelChecker = (this.config.LOGZIO_TOKEN) ? new LogLevelChecker(this.config.LOGZIO_LOG_LEVEL) : null;
        this._logzioLogger = (this.config.LOGZIO_TOKEN) ? new LogzioLogger(this.config) : null;
        this._tag = this.config.TAG;
        this._debug = (this.config.DEBUG) ? new RegExp(this.config.DEBUG) : null;
        this._debugTarget = this.config.DEBUG_TARGET;
    }

    debug(msg, data = {}) {
        this._log(msg, data, 'debug', false);
    }

    info(msg, data = {}) {
        this._log(msg, data, 'info', false);
    }

    warn(msg, data = {}) {
        this._log(msg, data, 'warn', false);
    }

    error(msg, data = {}) {
        this._log(msg, data, 'error', false);
    }

    assert(assertion, msg, data = {}) {
        if (assertion) {
            this._log(msg, data, 'assert', true);
        }
    }

    emergency(msg, data = {}) {
        this._log(msg, data, 'important', true);
    }

    _log(msg, data = {}, logLevel = 'off', overrideLogLevel = false) {
        data = Object.assign({
            time: Date(),
            tag: this.config.TAG,
            log_level: logLevel,
            msg: msg,
            environment: this.config.ENVIRONMENT
        }, data);
        if (this._shouldLogToLogger(console, this._logLevelChecker, logLevel, overrideLogLevel) === true) {
            console.log(this._buildConsoleMessage(data), data);
        }
        if (this._shouldLogToLogger(this._logzioLogger, this._logzioLogLevelChecker, logLevel, overrideLogLevel) === true) { // Do not log to logzio if a token was not provided
            this._logzioLogger.log(data);
        }
    }

    _buildConsoleMessage(data) {
        return `${data.time} - [${data.log_level}] - ${data.tag} - ${data.msg}`;
    }

    _validateDebug() {
        return (!this._debug) || (!!this._debug && this._debug.test(this._debugTarget));
    }

    _shouldLogToLogger(logger, logLevelChecker, logLevel, overrideLogLevel = false) {
        let shouldLog = false;
        if (this._tag !== null && this._debug !== null) {
            shouldLog = (!!logger) && (this._validateDebug() === true ||
                                       overrideLogLevel === true);
        } else {
            shouldLog = (!!logger) && ((!!logLevelChecker && logLevelChecker.shouldLog(logLevel) === true) ||
                                        overrideLogLevel === true);
        }
        return shouldLog;
    }

}

module.exports = CNNLogger;
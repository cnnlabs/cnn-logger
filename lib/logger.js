/*
 * Copyright 2016 Turner Broadcasting System, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function logger(options) {
    const util = require('util'),
        winston = require('winston'),
        logzioWinstonTransport = require('winston-logzio');

    let Logger,
        maxLevel = 'important',
        maxValue = 0;

    options = options || {};
    options.console = options.console || {};
    options.console.logLevel = process.env.CONSOLE_LOG_LEVEL || options.console.logLevel || process.env.LOG_LEVEL || 'important';
    options.file = options.file || {};
    options.file.level = options.file.level || options.file.logLevel || 'important';
    options.logzio = options.logzio || {};
    options.logzio.logLevel = process.env.LOGZIO_LOG_LEVEL || options.logzio.logLevel || process.env.LOG_LEVEL || 'important';

    ['console', 'file', 'logzio'].every((t) => {
        ['align', 'colorize', 'formatter', 'json', 'label', 'prettyPrint', 'raw', 'showLevel', 'stringify', 'timestamp'].every((o) => {
            if (typeof options[t][o] !== 'undefined') {
                console.error(`cnn-logger no longer supports the "${o}" option for the "${t}" transport!\n    You should use the "format" option with a custom formatter.\n    See https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md`);
            }
        });
    });

    if (typeof options.console.format !== 'object' || typeof options.console.format.transform !== 'function') {
        // No format defined for the console, so use a default one
        options.console.format = winston.format.combine(
            winston.format.splat(),
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.printf((info) => {
                return `${info.timestamp} - ${info.level}: ${info.message}` + (info.meta ? `\n${util.inspect(info.meta, false, 4)}` : '');  // eslint-disable-line prefer-template
            })
        );
    }

    Logger = winston.createLogger({
        levels: {
            silly: 70,
            debug: 60,
            verbose: 50,
            info: 40,
            warn: 30,
            error: 20,
            fatal: 10,
            important: 0
        },
        transports: [
            new winston.transports.Console({
                format: options.console.format,
                handleExceptions: options.console.handleExceptions || true,
                level: options.console.logLevel,
                silent: options.console.silent || false,
                stderrLevels: options.console.stderrLevels || ['error', 'fatal']
            })
        ]
    });

    winston.addColors({
        silly: 'grey',
        debug: 'blue',
        verbose: 'cyan',
        info: 'green',
        warn: 'yellow',
        error: 'red',
        fatal: 'magenta',
        important: 'green'
    });

    if (options.console.logLevel !== 'important') {
        maxLevel = options.console.logLevel;
        maxValue = Logger.levels[maxLevel];
    }
    if (options.file.level !== 'important' && Logger.levels[options.file.level] > maxValue) {
        maxLevel = options.file.level;
        maxValue = Logger.levels[maxLevel];
    }
    if (options.logzio.logLevel !== 'important' && Logger.levels[options.logzio.logLevel] > maxValue) {
        maxLevel = options.logzio.logLevel;
        maxValue = Logger.levels[maxLevel];
    }

    if (typeof options.file.filename === 'string' && options.file.filename.length !== 0) {
        Logger.add(new winston.transports.File(options.file));
    }

    if (typeof options.logzio.tag !== 'undefined' || Array.isArray(options.logzio.tags)) {
        Logger.add(new logzioWinstonTransport({
            bufferSize: options.logzio.bufferSize || 1,
            debug: options.logzio.debug || false,
            extraFields: {
                tags: options.logzio.tags ? options.logzio.tags : [options.logzio.tag]
            },
            level: options.logzio.logLevel,
            sendIntervalMs: options.logzio.sendIntervalMS || 5000,
            token: process.env.LOGZIO_TOKEN || options.logzio.token
        }));
    }

    Object.keys(Logger.levels).forEach((level) => {
        if (options.prependString) {
            Logger[level] = (msg) => {
                arguments[0] = options.prependString + msg;
                let args = [level].concat(Array.prototype.slice.call(arguments));
                Logger.log.apply(Logger, args);
            };
        }

        Logger[`do_${level}`] = (maxValue >= Logger.levels[level]);
    });

    return Logger;
}

module.exports = logger;

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
    const winston = require('winston'),
        logzioWinstonTransport = require('winston-logzio');

    let Logger;

    options = options || {};
    options.console = options.console || {};
    options.file = options.file || {};
    options.logzio = options.logzio || {};

    Logger = new winston.Logger({
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
        colors: {
            silly: 'grey',
            debug: 'blue',
            verbose: 'cyan',
            info: 'green',
            warn: 'yellow',
            error: 'red',
            fatal: 'magenta',
            important: 'green'
        },
        transports: [
            new winston.transports.Console({
                colorize: options.console.colorize || true,
                formatter: options.console.formatter || undefined,
                handleExceptions: options.console.handleExceptions || true,
                json: options.console.json || false,
                level: process.env.LOG_LEVEL || 'important',
                prettyPrint: options.console.prettyPrint || true,
                showLevel: options.console.showLevel || true,
                silent: options.console.silent || false,
                stderrLevels: options.console.stderrLevels || ['error', 'fatal'],
                stringify: options.console.stringify || false,
                timestamp: options.console.timestamp || true
            })
        ]
    });

    if (typeof options.file.filename === 'string' && options.file.filename.length !== 0) {
        Logger.add(new (winston.transports.File)(options.file));
    }

    if (typeof options.logzio.tag !== 'undefined' || Array.isArray(options.logzio.tags)) {
        Logger.add(logzioWinstonTransport,
            {
                bufferSize: options.logzio.bufferSize || 1,
                debug: options.logzio.debug || false,
                extraFields: {
                    tags: options.logzio.tag ? [options.logzio.tag] : options.logzio.tags
                },
                level: process.env.LOGZIO_LOG_LEVEL || 'important',
                sendIntervalMs: options.logzio.sendIntervalMS || 1000 * 2,
                token: process.env.LOGZIO_TOKEN
            }
        );
    }

    if (options.prependString) {
        Object.keys(Logger.levels).forEach((level) => {
            Logger[level] = (msg) => {
                arguments[0] = options.prependString + msg;
                let args = [level].concat(Array.prototype.slice.call(arguments));
                Logger.log.apply(Logger, args);
            };
        });
    }

    return Logger;
}

module.exports = logger;

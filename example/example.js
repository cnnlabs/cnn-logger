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

/*
 * Run with:
 *     $ LOGZIO_TOKEN=your-token node example.js
 */

'use strict';

const log = require('../lib/logger.js')({logzio: {tag: 'cnn-logger-example'}});
// your app would require 'cnn-logger' not '../lib/logger.js'

log.silly('sample silly log');
log.debug('sample debug', 'log');
log.verbose('sample verbose log');
log.info('sample info log');
log.warn('sample warn log');
log.error('sample error log');
log.fatal('sample fatal log');
log.important('sample important log');

log.important('sample with meta', {version: '1.0', IP: '127.0.0.1'});


'use strict';

const logger = require('../main'),
    fileTransport = require('../main').winston.transports.File;

logger.addHTTP('silly',  {host: 'g5vb4gr9s0yq.runscope.net', path:'/', level:'silly'});
logger.addTransport('silly', fileTransport, {filename:'temp', level:'silly'});
logger.addUDP('silly',{server:'g5vb4gr9s0yq.runscope.net', port:'80'});

setInterval(() => { 
    logger.logger.silly('Silly');
}, 1000 * 2 );


'use strict';

const logger = require('../main');
const fileTransport = require('../main').winston.transports.File;


logger.addHTTP('silly',  {host: 'g5vb4gr9s0yq.runscope.net', path:'/', level:'silly'});
//logger.addUDP('silly',{server:'g5vb4gr9s0yq.runscope.net', port:'80'})
logger.addTransport('silly', fileTransport, {filename:'temp', level:'silly'})

setInterval(()=>{
    logger.logger.silly('Silly')
},2000);


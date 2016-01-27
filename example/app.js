'use strict';

const logger = require('../main')
const fileTransport = require('../main').winston.transports.File;
logger.addTrasport('silly', fileTransport, {filename:'temp', level:'silly'})
console.log(fileTransport);
logger.addHTTP('silly',  {host: 'g5vb4gr9s0yq.runscope.net', path:'/', level:'silly'});
setInterval(()=>{
    logger.logger.silly('Silly')
},2000);


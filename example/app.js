'use strict';

const logger = require('../main')


logger.addHTTP('silly',  {host: 'https://niyqp55sglgh.runscope.net', ssl:true});
logger.addConsole('silly');
console.log(logger);
setInterval(()=>{
    logger.logger.info('Hello');   
    logger.logger.silly('Silly')
},2000);


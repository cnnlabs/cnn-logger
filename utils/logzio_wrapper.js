/*
Options

    token Mandatory. Your API logging token. Look it up in the Device Config tab in Logz.io
    type - Log type. Help classify logs into different classifications
    protocol - 'http', 'https' or 'udp'. Default: http
    sendIntervalMs - Time in milliseconds to wait between retry attempts. Default: 2000 (2 sec)
    bufferSize - The maximum number of messages the logger will accumulate before sending them all as a bulk. Default: 100.
    numberOfRetries - The maximum number of retry attempts. Default: 3
    debug - Should the logger print debug messages to the console? Default: false
    callback - a callback function called when an unrecoverable error has occured in the logger. The function API is: function(err) - err being the Error object.
    timeout - the read/write/connection timeout in milliseconds.
    addTimestampWithNanoSecs - Add a timestamp with nano seconds granularity. This is needed when many logs are sent in the same millisecond, so you can properly order the logs in kibana. The added timestamp field will be @timestamp_nano Default: false
*/

class LogzioWrapper {
    constructor (config) {
        if(!config.LOGZIO_TYPE) {
            throw "To create an instance of LogzioWrapper you must provide ";
        }
        this.logger = require('logzio-nodejs').createLogger({
            token: config.LOGZIO_TOKEN,
            type: config.LOGZIO_TYPE || undefined,
            addTimestampWithNanoSecs: true
        });
    }

    log (data) {
        if(!!data) {
            logger.log(data);
        }        
    }
};

module.exports = LogzioWrapper;
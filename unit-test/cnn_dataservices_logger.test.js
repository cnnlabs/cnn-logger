const Chai = require('chai');
const CnnDataservicesLogger = require('../index.js');

describe('CnnDataservicesLogger', () => {
    it('When a logger is created with no Logzio token then logzio logger in the logger instance should be null, and not send logs to logz.io.', (done) => {
        const logger = new CnnDataservicesLogger({
            
        });
        Chai.assert.isNull(logger._logzioLogger);
        done();
    });
    it('When a logger is created with no Logzio token then logzio logger in the logger instance should be null, and still logs to console.', (done) => {
        const logger = new CnnDataservicesLogger({
            LOG_LEVEL: 'warn',
            ENVIRONMENT: 'test'
        });
        logger.warn('test message');
        Chai.assert.isNull(logger._logzioLogger);
        done();
    });
});
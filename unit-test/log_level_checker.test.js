'use strict';
const Chai = require('chai');
const LogLevelChecker = require('../utils/log_level_checker');

describe('LogLevelChecker', () => {
    it('When log level is set to off ShouldLog should always return false.', (done) => {
        const logLevelChecker = new LogLevelChecker('off');
        Chai.assert.isFalse(logLevelChecker.shouldLog('off'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('error'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('warn'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('info'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('debug'));
        done();
    });
    it('When log level is set to error ShouldLog should return an appropriate value.', (done) => {
        const logLevelChecker = new LogLevelChecker('error');
        Chai.assert.isFalse(logLevelChecker.shouldLog('off'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('error'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('warn'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('info'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('debug'));
        done();
    });
    it('When log level is set to warn ShouldLog should return an appropriate value.', (done) => {
        const logLevelChecker = new LogLevelChecker('warn');
        Chai.assert.isFalse(logLevelChecker.shouldLog('off'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('error'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('warn'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('info'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('debug'));
        done();
    });
    it('When log level is set to info ShouldLog should return an appropriate value.', (done) => {
        const logLevelChecker = new LogLevelChecker('info');
        Chai.assert.isFalse(logLevelChecker.shouldLog('off'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('error'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('warn'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('info'));
        Chai.assert.isFalse(logLevelChecker.shouldLog('debug'));
        done();
    });
    it('When log level is set to debug ShouldLog should return an appropriate value.', (done) => {
        const logLevelChecker = new LogLevelChecker('debug');
        Chai.assert.isFalse(logLevelChecker.shouldLog('off'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('error'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('warn'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('info'));
        Chai.assert.isTrue(logLevelChecker.shouldLog('debug'));
        done();
    });
});
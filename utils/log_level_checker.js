const LOG_LEVELS = ['debug',
        'info',
        'warn',
        'error',
        'off'],
    MAX_LOG_LEVEL = LOG_LEVELS.length - 1;

class LogLevelChecker {
    constructor(logLevel) {
        this.logLevel = logLevel;
        this.logLevelValue = LOG_LEVELS.indexOf(logLevel);
    }

    shouldLog(targetLogLevel) {
        let shouldLog = false,
            targetLogLevelValue = LOG_LEVELS.indexOf(targetLogLevel);
        if (targetLogLevelValue !== MAX_LOG_LEVEL && this.logLevelValue <= targetLogLevelValue) {
            shouldLog = true;
        }
        return shouldLog;

    }
}

module.exports = LogLevelChecker;
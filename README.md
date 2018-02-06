# cnn-logger
A logging library for the data services team to help us have consistent logs across our apps.

## Usage
>  The logger looks in three places for values to the properties for the config object described below. First in the config object passed into the constructor, then in environment variables, and finally a default value is hard coded for each property if none is found. **__Please see below for a complete list of configuration properties.__**

```javascript
const logger = new require('cnn-logger')({
    // config data referenced below. Case matters so make sure your property names are upper case...
});
```
> This is the first use of the constructor where the sole parameter passed in is a config object consisting of the properties described below.

```javascript
const logger = new require('cnn-logger')('app:section:component', {
    // config data referenced below. Case matters so make sure your property names are upper case...
});
```
> This is the second allowed use of the constructor that provides backwards compatibility for anyone using the Debug NPM Package. The first parameter is the value of the `DEBUG_TAGET` property and the second is the config object for specifying any other properties necessary.

```javascript
logger.debug('my message', {
    // Additional data.
});
logger.info('my message', {
    // Additional data.
});
logger.warn('my message', {
    // Additional data.
});
logger.error('my message', {
    // Additional data.
});
logger.emergency('my message', {
    // Additional data.
}); // Always logs regardless of log levels or debug tag matching.
logger.assert(('boolean expression' !== false), 'my message', {
    // Additional data.
}); // If the first parameter evaluates to true it logs regardless of log level or debug pattern matching, otherwise it is ignored.
```


## Environment variables used (Also can be passed in as config obejct.)
* `LOG_LEVEL`- default value: `'off'`
    * debug
    * info
    * warn
    * error
    * off
* `LOGZIO_TOKEN` - default value: `null`
    * The logzio token for uploading logs to logz.io
    * If this is not provided then the logger will not attempt to log messages to logz.io
* `LOGZIO_LOG_LEVEL` - default value: `'off'`
    * Basically the same as `LOG_LEVEL`, but got checking if messages should be logged to Logzio. 
* `TAG` - default value: `'cnn-logger'`
    * The tag associated with each log message.
* `DEBUG` - default value: `null`
    * if provided will be used as a regex to check the `DEBUG_TARGET` of the logger and only log messages that match the regex or match the log level.
    * **__If this value is provided then the logger will enter a debug based logging mode and log levels will not be checked!__**
    * If not provided this check will not occur.
* `DEBUG_TARGET` - default value: `null`
    * This is the values used to compare to the regular expression created if the `DEBUG` variable is passed through.
* `ENVIRONMENT` - default value: `'not provided'`
    * used to specify the environment the code is running in.
    * Suggested values: **__This is just a suggestion :-)__**
        * local
        * dev
        * qa
        * stage
        * ref
        * prod
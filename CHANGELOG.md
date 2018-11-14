# CNN Logger ChangeLog

## 2018-11-13, Version 2.0.0, @drenter
### Notable changes
- Update to support Winston 3.x.
- Update Node and other dependencies.

### Commits
* [[`4c16177fb8`](https://github.com/cnnlabs/cnn-logger/commit/4c16177fb8)] - Update to support Winston 3.x.  Update minimum Node version and other dependencies. (James Drenter)



## 2017-04-05, Version 1.5.0, @drenter
### Notable changes
- Add do_<level> booleans, like do_debug and do_warn, to tell you if that level is logging.

### Commits
* [[`601f38ec7a`](https://github.com/cnnlabs/cnn-logger/commit/601f38ec7a)] - Add do_<level> booleans, like do_debug and do_warn, to tell you if that level is logging.  Do a better job with setting the log levels. (#11) (James Drenter) [#11](https://github.com/cnnlabs/cnn-logger/pull/11)



## 2017-02-23, Version 1.4.0, @jamsyoung
### Notable changes
- pass in log level via options

🐭  - What happened to 1.3.0?
😳  - Well, @jamsyoung did the tag wrong on 1.2.1.
     We are just not gonna talk about 1.3.0 anymore...

### Commits
* [[`23db0bb766`](https://github.com/cnnlabs/cnn-logger/commit/23db0bb766)] - add support for passing log level via options (#10) (Matthew Crutchfield) [#10](https://github.com/cnnlabs/cnn-logger/pull/10)



## 2017-02-01, Version 1.2.1, @jamsyoung
### Notable changes
- Update dependencies

### Commits
* [[`38fe0c3eda`](https://github.com/cnnlabs/cnn-logger/commit/38fe0c3eda)] - **deps**: update winston-logzio dep from 1.0.0 to 1.0.3 (Matthew Crutchfield) [#9](https://github.com/cnnlabs/cnn-logger/pull/9)



## 2017-01-19, Version 1.1.0, @jamsyoung
### Notable changes
- Made logging to file optional and removed the one that was created no matter what.


### Commits
* [[`4eb56b7483`](https://github.com/cnnlabs/cnn-logger/commit/4eb56b7483)] - **example**: add example (James Young)
* [[`5bc95bc543`](https://github.com/cnnlabs/cnn-logger/commit/5bc95bc543)] - **(SEMVER-MINOR)** **logger**: fix issue with local file being generated and add support for array of tags (DrEnter) [#7](https://github.com/cnnlabs/cnn-logger/pull/7)




## 2016-07-01, Version 1.0.0, @jamsyoung

### Notable changes

- Rewritten, sends logs to logz.io


### Known issues

See https://github.com/cnnlabs/cnn-logger/labels/defect for complete and
current list of known issues.


### Commits

* [[`197aaa7bd8`](https://github.com/cnnlabs/cnn-logger/commit/197aaa7bd8)] - rewrite (#4) (Jamie Young)




## 2016-02-20, Version 0.2.0, @jamsyoung

### Notable changes

- Removed loggly, added logstash


### Known issues

See https://github.com/cnnlabs/cnn-logger/labels/defect for complete and
current list of known issues.


### Commits

* [[`4b3cca8734`](https://github.com/cnnlabs/cnn-logger/commit/4b3cca8734)] - **(SEMVER-MINOR)** **base**: bring base files up to date (James Young) [#3](https://github.com/cnnlabs/cnn-logger/pull/3)




0.1.x - Initial versions - changes too numerous to list

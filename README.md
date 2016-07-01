# CNN Logger

Replaces `console.log()` with `log.[log-level]()` and sends logs to
[Logz.io](https://logz.io).



[![dependency-status](https://gemnasium.com/cnnlabs/cnn-logger.svg)](https://gemnasium.com/cnnlabs/cnn-logger)
[![build-status-master](https://img.shields.io/travis/cnnlabs/cnn-logger/master.svg?style=flat-square&label=master)](https://travis-ci.org/cnnlabs/cnn-logger)
[![build-status-develop](https://img.shields.io/travis/cnnlabs/cnn-logger/master.svg?style=flat-square&label=develop)](https://travis-ci.org/cnnlabs/cnn-logger)



## Requirements

Read these "_requirements_" as "_only tested with_".

- [Node.js](https://nodejs.org/) LTS or higher



## Usage

This is intended to be used as a dependency in a larger application.  Refer to
the [example.js](./example/example.js) that you can run with
`$ node example/example.js`.



## ESDoc Documentation

You can generate and view the docs locally with the commands below.  The `open`
command will only work on macOS.

```shell
$ npm run generate-docs
$ open docs/index.html
```



## NPM scripts

- `generate-authors` - Generates [AUTHORS.md](./AUTHORS.md).
- `generate-changelog` - Generates output to put in [CHANGELOG.md](./CHANGELOG.md).
- `generate-docs` - Generates ESDoc documentation in `/docs`.
- `test` - Runs all tests.
- `update-apply` - Updates [package.json](./package.json) with dependency updates.
- `update-check` - Outputs if any dependency updates are needed.




## Developer notes

- Always develop on the node version specified in the [.nvmrc](./.nvmrc) file.
  If [nvm](https://github.com/creationix/nvm) is used typing `nvm install`
  in the terminal will insure the correct version is used.

- Contributors should be familiar with the [Contributors Guide](https://github.com/cnnlabs/organization-docs/blob/master/CONTRIBUTING.md)

- Collaborators should be familiar with the [Collaborator Guide](https://github.com/cnnlabs/organization-docs/blob/master/COLLABORATOR_GUIDE.md)

- The current Project Owner (PO) of this project is Jamie Young ([@jamsyoung](https://github.com/jamsyoung/)).



### Environment variables

- **LOGZIO_TOKEN** - _REQUIRED_ - The token to authenticate to the Logz.io
  account that the logs should be sent to.



## Licensing

See [LICENSE.md](./LICENSE.md) for details.

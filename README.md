# CNN Logger

**Contents**

- [Documentation](#documentation)
- [Local development](#local-development)
  - [Requirements](#requirements)
  - [Local install](#local-install)
  - [How to start it up](#how-to-start-it-up)
  - [Environment variables](#environment-variables)
- [Generate local docs](#generate-local-docs)
- [Contributing](#contributing)
- [Project Owner](#project-owner)
- [Current Project Team Members](#current-project-team-members)



## Documentation

- ESDoc documentation can be generated.  See below for details.


## Local development


### Requirements


##### [nvm][nvm] - a reasonably current version

`nvm` will be used to manage the node versions installed on your
localhost.


##### [node](https://nodejs.org) - The version specified by `.nvmrc` and `package.json`

You should install this with [nvm][nvm]. Make sure you are in the root of the
project directory and do the following.  There is a `.nvmrc` file that tells
`nvm` what version to install and use.  The first `nvm install` command is only
needed the first time you try to use a version that has not been installed on
your system yet.

```shell
$ nvm install

$ node --version
v5.5.0
```


### Local install

Clone this repository, install the above requirements, then:

```shell
$ cd cnn-logger
$ nvm use
$ npm install
```


### How to start it up

This application runs off of project and environment configuration.  There are
a few environment variables required to start up the app.  See below for details
on all of the environment variables that can be set.  Here is the minimum
required to start the application up.  Defaults for the required ENVIRONMENT
variables are defined in the start script in package.json.

```shell
$ npm start
```


### Environment variables

- **ENVIRONMENT** - _REQUIRED_ - Should be `ref` or `prod`.  Anything
  passed in that does not match this list is treated as `ref`.  This sets the
  group of project configuration to use. (See config.js)

- **PORT** - _REQUIRED_ - The port that this application will run on.  `5000` is
  a common value, but you can use any valid port number that is available on
  your system.


## Generate Local Docs

```shell
$ npm run generate-docs
$ open docs/index.html
```


## Contributing

If you would like to contribute, just fork and submit a pull request.  Please
review the [contributing guidelines](./CONTRIBUTING.md) first.


## Project Owner

James Young <james.young@turner.com) (@jamsyoung) is the current Project Owner
of this repository.  The project owner is responsible for the implementation of
this project.


## Current Project Team Members

This is a list of people directly responsible for the implementation of this
project.  For more information about the governance of this project, see
[GOVERNANCE.md](./GOVERNANCE.md).

- James Young <james.young@turner.com> (@jamsyoung) - Applications Architect

Collaborators follow the [COLLABORATOR_GUIDE.md](./COLLABORATOR_GUIDE.md) in
maintaining this project.




[nvm]: https://github.com/creationix/nvm

# Build / Deployment Details
Builds are done on Codeship when commits are made to any branch.
Production deployments are done when builds are completed on the master branch.
Test deployments are done when builds are completed on the develop branch.


## Links
- Codeship - https://codeship.com/projects/68832


## Codeship scripts
These scripts are copies of what is on Codeship.


#### Setup
```shell
## A copy of this script is in the repository in BUILD.md.
## If you make changes directly on Codeship, make sure to check in the changes
## to the repository.  It is actually best to update the one in source control
## and copy/paste the script into the Codeship page.

#### SETUP ####

## Install node engine
nvm install "$(jq -r '.engines.node' package.json)"

## Clean npm cache
npm cache clean
rm -rf ~/clone/node_modules

## Install Package
npm install
```


#### Test Pipeline 1
```shell
#### Pipeline - Test Commands ####

## Run Tests
npm test


## Generate Documentation
npm run generate-docs


## Copy documentation out for uploading to documentation server later
cp -r docs ~/


## Generate Dockerfile
npm run generate-dockerfile
```


#### Deploy Step 1
```shell
## A copy of this script is in the repository in BUILD.md.
## If you make changes directly on Codeship, make sure to
## check in the changes to the repository.  It is actually
## best to update the one in source control and copy/paste
## the script into the Codeship page.

## Variables
NOW=$(date +"%Y%m%d%H%M%S")
PACKAGE_NAME=$(jq -r '.name' package.json)
PACKAGE_VERSION=$(jq -r '.version' package.json)
QA_TAG=$([ "${CI_BRANCH}" == master ] && echo "" || echo ".${CI_BRANCH}")
SEMVER=${PACKAGE_VERSION}-${CI_BUILD_NUMBER}${QA_TAG}
ARTIFACT_PACKAGE_NAME="${PACKAGE_NAME}"
TARBALL_FILENAME=${PACKAGE_NAME}-${SEMVER}.${NOW}.tar.gz
export S3_ARTIFACT_BUCKET_NAME=cnn/${ARTIFACT_PACKAGE_NAME}


## Update version in package.json
jq ".version = \"${SEMVER}\"" package.json > modified && mv modified package.json


## Change directory to home
cd ~


## Create the tarball
tar czf "${TARBALL_FILENAME}" -X clone/.dockerignore -C clone .

## Create the artifact directory, this is required due to the
## way the Codeship S3 deployment mechanism works.
mkdir artifact


## Move the artifact to the artifact directory, this is
## required due to the way the Codeship S3 deployment
## mechanism works.
mv "${TARBALL_FILENAME}" "artifact/${TARBALL_FILENAME}"
```


#### Deploy Step 2
This step requires private keys.  Speak with @jamsyoung for details.


#### Deploy Step 3
```shell
## A copy of this script is in the repository in BUILD.md.
## If you make changes directly on Codeship, make sure to
## check in the changes to the repository.  It is actually
## best to update the one in source control and copy/paste
## the script into the Codeship page.

## POST to baton
curl -sS -X POST -H 'Content-Type: application/json' baton.outturner.io/docker/build -d "{\"packageTarballName\":\"${TARBALL_FILENAME}\",\"packageName\":\"${PACKAGE_NAME}\",\"packageVersion\":\"${SEMVER}\"}"

## -sS = --silent --show-error
## -X  = --request POST
## -H  = --header
## -d  = --data
```

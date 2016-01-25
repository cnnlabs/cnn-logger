# Build / Deployment Details
Builds are done on Codeship when commits are made to any branch.
Production deployments are done when builds are completed on the master branch.
Test deployments are done when builds are completed on the develop branch.


## Links
- Codeship - https://codeship.com/projects/129713


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

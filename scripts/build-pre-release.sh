#!/bin/bash
set -e

VERSION=`npm run version --silent`

yarn build:libs

cd packages/docs

rm -rf "dist/releases/v${VERSION}"

yarn build -o "dist/releases/v${VERSION}"

cd ../../scripts

node helpers/addVersionOnConfig.js $VERSION

VERSION_WO_ALPHA=`node helpers/removeAlphaFromVersion.js ${VERSION}`

git checkout -b "v${VERSION_WO_ALPHA}-docs"

# Travis will make the commit
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git add --all
git commit -m "Travis Commit: Generating docs for alpha version ${NEW_VERSION}"

git remote rm origin
# This remote is using a contributor account and an OAuth key from github
# Adapted from https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci
git remote add origin https://robertLichtnow:$GITHUB_API_KEY@github.com/natura-cosmeticos/natds

git push -f -q

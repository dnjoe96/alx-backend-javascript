#!/usr/bin/env bash

# script to automate installation on project directory

MYPWD=$(pwd)
cd $MYPWD

npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
npm install

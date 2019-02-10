FROM node:10-alpine

WORKDIR /usr/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn config set registry http://registry.npmjs.org/ && yarn install --network-timeout 100000

COPY . .
FROM node:6.10

ENV APP /e2e
RUN mkdir -p $APP

COPY package.json $APP/package.json
COPY yarn.lock $APP/yarn.lock

WORKDIR $APP

RUN yarn install --pure-lockfile

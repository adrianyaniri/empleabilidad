FROM node:20-alpine3.20 AS base

ENV DIR=/app
WORKDIR $DIR

FROM base AS build

ARG NPM_TOKEN

RUN apk update && apk add --no-cache dumb-init

COPY package*.json $DIR
COPY yarn.lock $DIR

RUN yarn install --frozen-lockfile

COPY tsconfig*.json $DIR
COPY src /$DIR/src

RUN yarn build && \
    yarn install --production

FROM base AS development

ENV NODE_ENV=development

COPY package*.json $DIR
COPY yarn.lock $DIR

RUN yarn install --frozen-lockfile

COPY tsconfig*.json $DIR
COPY src /$DIR/src

EXPOSE $PORT

CMD ["yarn","run", "start:dev"]

FROM base AS production

ENV USER=node

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build $DIR/node_modules $DIR/node_modules
COPY --from=build $DIR/dist $DIR/dist

ENV NODE_ENV=production

EXPOSE $PORT

USER $USER

CMD ["dumb-init","node", "dist/main.js"]
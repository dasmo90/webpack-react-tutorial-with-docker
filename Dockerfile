FROM node:11-alpine
RUN addgroup developer
RUN adduser --home /development --disabled-password --ingroup developer react
COPY .babelrc /development/.babelrc
COPY package.json /development/package.json
COPY server.js /development/server.js
COPY webpack.config.js /development/webpack.config.js
RUN chown react:developer /development/*
RUN chown react:developer /development/.*
VOLUME ["/development/src"]
USER react
WORKDIR /development
RUN npm install
ENTRYPOINT ["npm", "start"]

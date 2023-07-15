FROM node:18
WORKDIR /usr/src/app
RUN npm install -g nodemon
RUN npm install -g ts-node-dev
CMD npm install && nodemon server.js
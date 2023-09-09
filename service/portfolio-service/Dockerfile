FROM node:18-alpine

RUN mkdir -p /usr/src/app/service/portfolio-service/src

COPY ./service/portfolio-service/package.json /usr/src/app/service/portfolio-service/package.json

WORKDIR /usr/src/app/service/portfolio-service

RUN npm install

COPY ./common/ /usr/src/app/common

COPY ./service/portfolio-service/  /usr/src/app/service/portfolio-service

RUN npm run build

CMD ["node", "./src/app.js"]

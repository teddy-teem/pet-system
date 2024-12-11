FROM node:20

WORKDIR /usr/src/app

COPY /src/package*.json ./
RUN npm install

COPY ./src .
COPY ./src/.env .

EXPOSE 6010

CMD ["npm", "start"]

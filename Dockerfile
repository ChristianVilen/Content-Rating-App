FROM node:14-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i --force

COPY . .

EXPOSE 8000

CMD npm run dev

FROM node:16
WORKDIR /app
COPY package*.json ./
COPY . .
RUN cp src/environments/environments.example.js src/environments/environments.js
EXPOSE 3000

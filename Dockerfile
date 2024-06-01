FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p ./environments
RUN touch ./environments/environments.js
COPY ./environments ./src/environments
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

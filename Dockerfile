FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN touch src/environments/environments.js
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

FROM node:16
WORKDIR /app
RUN touch ./environments/environments.js
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

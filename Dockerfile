FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p src/environments/environments
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

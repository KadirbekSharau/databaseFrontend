FROM node:latest 

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

RUN npm install -g @angular/cli 

COPY . ./
EXPOSE 3000

CMD [ "npm", "run", "start" ]
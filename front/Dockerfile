FROM node:lts-alpine 

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install -g @angular/cli@latest
COPY . ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
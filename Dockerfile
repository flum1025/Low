FROM node:8.7.0
MAINTAINER flum1025 <flum.1025@gmail.com>

ADD ./ /app
WORKDIR /app

RUN npm install && npm run build

EXPOSE 3000
CMD ["/usr/local/bin/npm", "run", "start"]

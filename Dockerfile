FROM node:lts

WORKDIR /app

COPY . /app

RUN npm install
# RUN node app.json
#changed port
EXPOSE 3888

CMD ['npm','start']
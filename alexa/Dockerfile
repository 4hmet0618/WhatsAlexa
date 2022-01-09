FROM node:latest

RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa
WORKDIR /root/WhatsAlexa/
RUN npm install
RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa-Modules

CMD ["node", "alexa.js"]

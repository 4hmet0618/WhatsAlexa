FROM node:latest

RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa /root/WhatsAlexa
WORKDIR /root/WhatsAlexa/
RUN npm install

CMD ["node", "alexa.js"]

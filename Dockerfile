FROM node:18-alpine

WORKDIR /sandwichbar/

COPY public/ /sandwichbar/public
COPY src/ /sandwichbar/src
COPY package.json /sandwichbar/
COPY tsconfig.json /sandwichbar/

RUN npm install

CMD ["npm", "start"]
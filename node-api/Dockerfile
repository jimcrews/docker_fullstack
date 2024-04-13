FROM node:21-alpine

WORKDIR /usr/src/app

# dont run in development mode
ENV NODE_ENV production

COPY package*.json ./

# clean install, and dont install dev dependencies
RUN npm ci --only=production

# dont use root
USER node
COPY --chown=node:node ./src .

# expecting to run on port 3000
EXPOSE 3000

CMD ["node", "index.js"]
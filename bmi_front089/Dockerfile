FROM node:10
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .
EXPOSE 2000
CMD sails lift --port 2000
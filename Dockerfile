FROM node:lts-alpine3.16 As dev

ENV USER=node
ENV APP=/home/$USER

WORKDIR $APP

COPY ./app .

RUN chown -R $USER $APP

USER $USER

RUN npm install

CMD ["npm", "run", "start"]
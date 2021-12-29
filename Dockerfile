# base image
FROM node:16-buster

# update apt-get
RUN apt-get update

# install cypress dependencies
RUN apt-get install --no-install-recommends -y libgtk2.0-0
RUN apt-get install --no-install-recommends -y libgtk-3-0
RUN apt-get install --no-install-recommends -y libgbm-dev
RUN apt-get install --no-install-recommends -y libnotify-dev
RUN apt-get install --no-install-recommends -y libgconf-2-4
RUN apt-get install --no-install-recommends -y libnss3
RUN apt-get install --no-install-recommends -y libxss1
RUN apt-get install --no-install-recommends -y libasound2
RUN apt-get install --no-install-recommends -y libxtst6
RUN apt-get install --no-install-recommends -y xauth
RUN apt-get install --no-install-recommends -y xvfb

# install node utilities
RUN npm install --global standard
RUN npm install --global snazzy
RUN npm install --global npm-check-updates

# install utilities
RUN apt-get install --no-install-recommends -y vim

# electron configuration for pcm plugin
ARG ASOUND_CONF='pcm.!default { type plug slave.pcm "null" }'
RUN echo ${ASOUND_CONF} > /etc/asound.conf

# environment configs
ENV TERM xterm
ENV npm_config_loglevel warn
ENV npm_config_unsafe_perm true

# define workdir
WORKDIR /app

# copy project
COPY . .

# project linter
RUN standard -v | snazzy

# install project
RUN yarn install
CMD ["yarn", "--version"]


FROM node:13.2.0-alpine

# Fixes for Python missing for node-gyp
# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++

COPY package.json /app/
COPY package-lock.json /app/
COPY index.ts /app/
COPY tsconfig.json /app/
COPY swagger.json /app/
COPY src /app/src

WORKDIR /app
VOLUME /app/data

RUN npm install
RUN apk del build-dependencies

CMD /bin/sh -c "npm run dev"

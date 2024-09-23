FROM --platform=linux/amd64 node:22.6.0-alpine

# Add Repositories
RUN rm -f /etc/apk/repositories && \
    echo "http://dl-cdn.alpinelinux.org/alpine/v3.20/main" >> /etc/apk/repositories && \
    echo "http://dl-cdn.alpinelinux.org/alpine/v3.20/community" >> /etc/apk/repositories
RUN apk update && apk add --no-cache \
    libzip-dev \
    bzip2-dev \
    libwebp-dev \
    zip \
    bash \
    icu-dev \
    zlib-dev \
    curl-dev \
    git \
    vim 

RUN npm install -g pnpm

COPY . /usr/src/api
WORKDIR /usr/src/api

RUN rm -rf node_modules

RUN pnpm install && \
    pnpm build

EXPOSE 5000

ENTRYPOINT ["pnpm", "start"]
FROM node:22.14-alpine AS builder

RUN apk add --no-cache \
    libc6-compat \
    git \
    python3 \
    make \
    g++ \
    curl

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm ci && npm install

COPY  . .

RUN  npm run build


FROM node:22.14-alpine 


# Runtime dependencies (Alpine uses apk, not apt-get)
RUN apk add --no-cache \
    libc6-compat \
    curl


WORKDIR /usr/src/app

COPY  --from=builder  /usr/src/app/package*.json ./

RUN  npm ci

COPY  --from=builder  /usr/src/app/dist ./

COPY  --from=builder  /usr/src/app/node_modules ./

RUN ls -la dist/

# # Cloud Run essentials
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
USER node

CMD [ "npm" ,"start" ]

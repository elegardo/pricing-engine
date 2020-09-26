FROM node:12.16.2-alpine3.10 as builder

WORKDIR /app

COPY . /app

RUN	apk add --no-cache binutils && \
	npm config set update-notifier false && \
	npm ci --no-audit --production && \
	npm run build && \
	strip /usr/local/bin/node

FROM alpine:3.7

COPY --from=builder /usr/local/bin/node /usr/bin/
COPY --from=builder /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
COPY --from=builder /app /app

WORKDIR /app

RUN apk add --no-cache tini
RUN apk add --no-cache curl

ENV PORT=4444 \
	MAX_EVENT_LOOP_DELAY=1000 \
	MAX_RSS_BYTES=0 \
	MAX_HEAP_USED_BYTES=0 \
	MAX_AGE=86400

EXPOSE $PORT

# an init entrypoint that simplifies signal handling
COPY entrypoint.sh /usr/bin/entrypoint
ENTRYPOINT ["tini", "--"]
CMD ["entrypoint"]

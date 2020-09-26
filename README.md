# Pricing Engine API Server

Bootstrapping an API Server using [fastify](https://github.com/fastify/fastify)


### Database


```console
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```

### Environment

create `.env` environment file
```console
touch .ev
```

setting this:

```javascript
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=docker
DB_NAME=postgres
DB_PORT=5432
DB_MIN_CONNECTIONS=10
DB_MAX_CONNECTION=10
DB_SCHEMA=
```

### NPM Installation

Install the package and dependencies:

```console
npm i
```

### Migrations

Create tables

```console
npm run migrate
```

populate with demo data

```console
npm run seed
```

### Run Server

```console
npm start
```

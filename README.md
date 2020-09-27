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

* all demo rules [here](./seeds/01_rules.js)

### Run Server

```console
npm start
```

## API /process

POST
```console
127.0.0.1:3000/v1/process
```

PAYLOAD example
```javascript
{
    "sku": "1",
    "category": "1",
    "competitorStock": [
            100,
            0,
            0
        ],
    "price": {
        "currentPrice": 900,
        "competitorPrice": [
            800,
            800,
            800
        ]
    }
}
```

RESPONSE example
```javascript
{
    "suggestions": [
        {
            "action": "decrease",
            "message": "Cuidado !! baja un poquito tu precio, estas sobre el 5% que tu competencia"
        }
    ]
}
```

## API /rules


In order retrieve all rules

GET
```console
127.0.0.1:3000/v1/rules
```

Retrieve rule by id

GET
```console
127.0.0.1:3000/v1/rules/:id
```

Save a new rule

POST
```console
127.0.0.1:3000/v1/rules
```

PAYLOAD example
```javascript
{
    "name": "ruleSample10",
    "description": "description rule",
    "conditions": {
        "all": [
            {
                "all": [
                    {
                        "fact": "price",
                        "operator": "lessThanXPercentThanCompetitor",
                        "value": "15"
                    }
                ]
            }
        ]
    },
    "event": {
        "type": "event",
        "params": {
            "message": "Ups !! estas al menos un 15% bajo la competencia, estas seguro de este precio ?  ;)"
        }
    }
}
```

### Rules

### Operators
Operadores por defecto del engine de reglas [json-rules-engine](https://github.com/CacheControl/json-rules-engine), permite evaluar datos nativos:

* equal
* notEqual
* in
* notIn
* contains
* doesNotContain
* lessThan
* lessThanInclusive
* greaterThan
* greaterThanInclusive

### Custom operators
Operadores personalizados que evaluan distintas reglas de negocio. Para su ejecucion es necesario enviar el siguiente formato en el payload:

```javascript
{
    "sku": "1",
    "category": "1",
    "competitorStock": [
            100,
            0,
            0
        ],
    "price": {
        "currentPrice": 900,
        "competitorPrice": [
            800,
            800,
            800
        ]
    }
}
```

* **lessThanXPercentThanCompetitor**: Evalua que el precio no este un X% bajo el promedio de precios de los competidores

* **greaterThanXPercentThanCompetitor**: Evalua que el precio no este un X% sobre el promedio de precios de los competidores

* **betweenXPercentThanCompetitor**: Evalua que el precio este en un rango de X% bajo o sobre el promedio de precios de los competidores

* **equalToXPrice**: Evalua que el precio sea igual al X precio promedio de precios de los competidores

* **equalToXStock**: Evalua que el stock promedio de los competidores es igual a X
 
* **notEqualToXStock**: Evalua que el stock promedio de los competidores NO es igual a X
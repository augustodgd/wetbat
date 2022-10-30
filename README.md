# WetBat App

In this app it's possible to create and see the list and details of a Quote.

The front-end is a React SPA, found on the `/client` directory.

The back-end is a NestJS API, found on the `/api` directory. Postgres is used as the DB.

## Dependencies

- Node v14
- Yarn
- Docker (for running the DB)

## Setup

1. Create a `.env` file at /api, filling the following keys:

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=
POSTGRES_HOST=
POSTGRES_DBNAME=
```

2. Run the DB, at /api:

```
yarn db:run
```

3. Seed the DB, at /api:

```
yarn db:seed
```

4. Install the API dependencies, at /api:

```
yarn install
```

5. Run the API, at /api:

```
yarn start
```

6. Install the front-end dependencies, at /client:

```
yarn install
```

7. Run the front-end, at /client:

```
yarn start
```

## Unit tests

The front-end has unit tests for the react components, using Jest and RTL

### Running tests

At /client directory

```
yarn test
```

### Running coverage

At /client directory

```
yarn test --coverage
```

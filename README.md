# Example Petflix Service

This is the API for the Petflix application. It serves metadata about animal videos so the client can render them.

## Setup

```
$ npm i
```

This service connects `localhost:27017/test` or the database in the `MONGODB_URI` environment variable. This database should have a `petflix` collection with the data in `seed-data.json`.

```
$ mongoimport -h <host> -d <dbname> -c petflix -u <username> -p <pass> --jsonArray --file seed-data.json
```

## Running

```
node index.js
```

## Local Dev

### Postgres DB

Create / Run:

`make run-postgres`

### Node API

Create: 

`npm install`

Run:

`make run-node-api`

launch browser to test: http://localhost:3000/


### React App

Create:

```
npm create vite@latest react-client -- --template react-ts
cd react-client
npm install
```

Run:

`make run-react-client`


## Docker

### Node

Build docker image:

`docker build -t node-api:0 .`

### React

Build docker image:

`docker build -t react-client:0 .`


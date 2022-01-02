# Mung Scanner

### skills

* angular
* nestjs
* socket.io
* web3
* swagger

### used solution

* mongodb
* redis
* kafka

### architecture

![](documents/architecture/v1.png)

# useage

### db

* up

```
$ npm run db:up
```

* down

```
$ npm run db:down
```

### agent

* .env

***`docker/.env`*** 

```
RPC_IP=127.0.0.1:8545
```

RPC_IP에 노드 접속 정보를 연결한다

* up

```
$ npm run agent:up
```

* down

```
$ npm run agent:down
```
# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "wign",
  "password": "secret",
  "name": "wign66"
}
```

Response Body (Success) :

```json
    "data":{
        "username":"wign",
        "name":"wign66"
    }
```

Response Body (Failed) :

```json
"erors":"username must not blank...."
```

## Login User

Endpoint: POST /api/users/login

```json
{
  "username": "wign",
  "password": "secret"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "wign",
    "name": "wign66",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

Response Body (Failed) :

```json
"erors":"username or password wrong...."
```

## Get User

Endpoint: GET /api/users/current

Request Header :

- X-API-TOKEN: token

Response Body (Success):

```json
{
  "data": {
    "username": "wign",
    "name": "wign66"
  }
}
```

Response Body (Failed) :

```json
"erors":"unauthorized,..."
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-APi-TOKEN : TOKEN

Request Body :

```json
{
  "password": "secret", //opsional
  "name": "wign66" // opsional
}
```

Response Body (Success) :

```json
    "data":{
        "username":"wign",
        "name":"wign66"
    }
```

Response Body (Failed) :

```json
"erors":"Unauthorized...."
```

## Logut

Request Header :

- X-APi-TOKEN : TOKEN

Endpoint : DELETE /api/users/current

Response Body (Success) :

```json
    "data": "OK"
```

Response Body (Failed) :

```json
"erors":"Unauthorized..."
```

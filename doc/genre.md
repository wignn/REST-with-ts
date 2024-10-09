# Genres API Spec

## Create Genre

Endpoint: POST /api/genres

Request Header :

- X-API-TOKEN

Request Body :

```json
{
  "id": 1,
  "title": "dancing",
}
```

Response Body(Success) :

```json
{
  "data": {
    "id": 1,
    "title": "dancing",
  }
}
```

Response Body(Failed) :

```json
{
  "errors": "all field required...."
}
```

## Get All Genres

Endpoint: GET /api/genres

Response Body(Success) :

```json
{
    "data": [
        {
            "id": 1,
            "title": "dancing"
        },
        {
            "id": 2,
            "title": "singing"
        }
    ]
}
```

## Get Genre by ID

Endpoint: GET /api/genres/{id}

Response Body(Success) :

```json
{
    "data": {
        "id": 1,
        "title": "dancing"
    }
}
```

## Get Genre by Name

Endpoint: GET /api/genres?name={name}

Response Body(Success) :

```json
{
    "data": {
        "id": 1,
        "title": "dancing"
    }
}
```

## Update Genre

Endpoint: PUT /api/genres/{id}

Request Header :

- X-API-TOKEN

Request Body :

```json
{
    "title": "new title"
}
```

Response Body(Success) :

```json
{
    "data": {
        "id": 1,
        "title": "new title"
    }
}
```

## Delete Genre

Endpoint: DELETE /api/genres/{id}

Request Header :

- X-API-TOKEN

Response Body(Success) :

```json
{
    "message": "Genre deleted successfully"
}
```

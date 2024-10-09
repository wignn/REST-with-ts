# Chapter API Spec

## Create Genre

Endpoint: POST /api/chapter

Request Header :

- X-API-TOKEN

Request Body :

```json
{
  "id": 1,
  "title": "prolog",
  "content": "I possessed the weakest"
}
```

Response Body(Success) :

```json
{
  "data": {
    "id": 1,
    "title": "dancing"
  }
}
```

Response Body(Failed) :

```json
{
  "errors": "all field required...."
}
```

## Update Genre

Endpoint: PUT /api/chapter/:id

Request Header :

- X-API-TOKEN

Request Body :

```json
{
  "title": "updated title",
  "content": "updated content"
}
```

Response Body(Success) :

```json
{
  "data": {
    "id": 1,
    "title": "updated title"
  }
}
```

Response Body(Failed) :

```json
{
  "errors": "all field required...."
}
```

## Delete Genre

Endpoint: DELETE /api/chapter/{id}

Request Header :

- X-API-TOKEN

Response Body(Success) :

```json
{
  "message": "Chapter deleted successfully"
}
```

Response Body(Failed) :

```json
{
  "errors": "Chapter not found"
}
```

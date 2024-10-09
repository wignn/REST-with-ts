# Book API Spec

## Create Book

Endpoint: POST /api/books

Request Header :

- X-API-TOKEN

Request Body :

```json
{
  "id": "1",
  "title": "dancing",
  "author": "noname",
  "synopsis": "I possessed the weakest character in my."
}
```

Response Body(Success) :

```json
{
  "data": {
    "id": 1,
    "title": "dancing",
    "author": "noname",
    "synopsis": "I possessed the weakest character in my."
  }
}
```

Response Body(Failed) :

```json
{
  "errors": "all field required...."
}
```

## Get Book

Endpoint : GET /api/Books/:id

Request Header :

- X-API-TOKEN : token

Response Body(Success) :

```json
{
  "data": {
    "id": 1,
    "title": "dancing",
    "author": "noname",
    "synopsis": "I possessed the weakest character in my."
  }
}
```

Response Body (Failed) :

```json
{
  "erors": "Book is not found"
}
```

## Update Book

Endpoint : PUT /api/Books/:id

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "title": "dancing",
  "author": "noname",
  "synopsis": "I possessed the weakest character in my."
}
```

Response Body(Success) :

```json
{
  "data": {
    "id": 1,
    "title": "dancing",
    "author": "noname",
    "synopsis": "I possessed the weakest character in my."
  }
}
```

Response Body (Failed) :

```json
{
  "erors": "Book is not found"
}
```

## Remove Book

Endpoint : DELETE /api/Books/:id

Request Header :

- X-API-TOKEN : token

Request Body (Success):

```json
{
  "data": "OK"
}
```

Request Body (Failed) :

```json
{
  "errors": "Book is not found"
}
```

## Search Book

Endpoint: GET /api/Books/search

Request Header:

- X-API-TOKEN: token

Query Parameters:

- `title` : string, (optional): The title of the book to search for.
- `author` : string, (optional): The author of the book to search for.
- `page` : number, default 1
- `size` : number, default 10

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "title": "dancing",
      "author": "noname",
      "synopsis": "I possessed the weakest character in my."
    },
    {
      "id": 2,
      "title": "singing",
      "author": "someone",
      "synopsis": "A journey through melodies."
    }
  ]
}
```

Response Body (Failed):

```json
{
  "errors": "No books found matching the criteria."
}
```

# Pagination Helper

## What it does

Extracts pagination parameters from request query and calculates database offset.

## Usage

```js
const getPagination = require("./pagination");

const { page, limit, offset } = getPagination(req.query);
```

## Example Request

```text
GET /users?page=2&limit=20
```

## Result

```js
{
  page: 2,
  limit: 20,
  offset: 20
}
```

## Notes

- Default page = 1
- Default limit = 10
- Offset can be used with SQL `LIMIT` queries or ORM methods.
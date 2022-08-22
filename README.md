# Documentation-Arsy

Arsy Digicom for products and blogs CRUD

## Access Endpoint

You Can paste in your postman or insomnia 
```
https://mongo-arsy.herokuapp.com/
```

## Endpoint

Schema API for Products

Method | Endpoint  | Description
---------|----------|---------
 GET | /products/ | Get All Products
 POST | /products/add-product | Adding Product
 GET | /products/get-product/:id | Get profile product
 POST | /products/update-product/:id | Update Product
 GET | /products/token | Get Token
 GET | /blogs | Get All Blogs
 POST | /blogs/create | Create new Blog
 GET | /blogs/detail/:id | Get Spefied Blog
 PUT | /blogs/update/:id | Update blog


## Params


| Field  | Type   | Rules    | Description                                                                                    |
|--------|--------|----------|------------------------------------------------------------------------------------------------|
| type   | String | Required | type product has calling [games, printing, atk]                                                |
| sort   | String | Optional | Sorting product with price and date<br>date [dateasc, datedesc]<br>price [priceasc, pricedesc] |
| page   | number | Optional | Change page product                                                                            |
| search | String | Optional | Searching Products                                                                             |
| limit | Number | Optional default 2 | Limit the show products to the specified number of products|


---

### Body Request Products

Field | Rules  | type
---------|----------|---------
 name | required | string
 images | optional | array
 price | optional | number
 description | optional | string
 product | required | enum [games, printing, atk]

### Body Request Blogs

Field | Rules  | type
---------|----------|---------
 title | required | string
 images | required | string
 description | required | string



**Note: Get all request products and update or create blogs, must be use token have to generated**

---

##### Owner API - Mohammad Ardi Trisnaldi


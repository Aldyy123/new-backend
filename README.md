# Documentation-Arsy

Arsy Digicom for products and blogs CRUD

## Access Endpoint

You Can paste in your postman or insomnia 
```
    https://mongo-arsy.herokuapp.com/
```

Schema API for Products

Method | Endpoint  | Description
---------|----------|---------
 GET | /products/ | Get All Products
 POST | /products/add-product | Adding Product
 GET | /products/get-product/:id | Get profile product
 POST | /products/update-product/:id | Update Product
  GET | /products/token | Get Token

## Endpoint

###### Params
| Field  | Type   | Rules    | Description                                                                                    |
|--------|--------|----------|------------------------------------------------------------------------------------------------|
| type   | String | Required | type product has calling [games, printing, atk]                                                |
| sort   | String | Optional | Sorting product with price and date<br>date [dateasc, datedesc]<br>price [priceasc, pricedesc] |
| page   | number | Optional | Change page product                                                                            |
| search | String | Optional | Searching Products                                                                             |
| limit | Number | Optional default 2 | Limit the show products to the specified number of products|

---

This Database Inactiv from server mongodb cluster, if you want try the api. You can request permission on owner api. 

Owner API - Mohammad Ardi Trisnaldi


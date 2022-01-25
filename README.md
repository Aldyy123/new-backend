# Documentation-Arsy

Arsy Digicom for products and blogs CRUD

## Access Endpoint

You Can paste in your postman or insomnia \`\`

    https://mongo-arsy.herokuapp.com/


Schema API for Products

Method | Endpoint  | Description
---------|----------|---------
 GET | /products/ | Get All Products
 POST | /products/add-product | Adding Product
 GET | /products/get-product/:id | Get profile product
 POST | /products/update-product/:id | Update Product

## Endpoint

###### Params
| Field  | Type   | Rules    | Description                                           |
|--------|--------|----------|-------------------------------------------------------|
| type   | String | Required | type product has calling [[games], [printing], [atk]] |
| sort   | String | Optional | Sorting product [asc, desc]                           |
| page   | number | Optional | Change page product                                   |
| search | String | Optional | Searching Products                                    |

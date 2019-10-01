# Verfii_api_server

## Running a test server with db


```
cd dotbc-take-home
npm install -g json-server
json-server --watch dbmusic.json

```

#### Explanation 

json-server is a npm package that creates a json server and also crate multiple routes to the "server database"

Filtering is done using query parameters: GET http://localhost:3000/articles?title=GraphQL.

Sort is as easy as adding _sort & _order (asc & desc) query parameters:

GET http://localhost:3000/articles?_sort=likes

(Assuming we have added the likes field to each article). The order is ascending by default.

In case we want to sort by multiple properties, we can write our properties separated by a comma:

GET http://localhost:3000/articles?_sort=author,score&_order=desc,asc

Operators are suffixes used to augment our query parameters:

_gt (greater than), _lt (less than), _gte (greater than or equal) and _lte (less than or equal): GET http://localhost:3000/comments?score_gte=5 (assuming we have a score field in the comments)
_ne(not equal) negation of an expression GET http://localhost:3000/comments?articleId_ne=2
_like is an operator that can be applied to string properties, it gives the same result as an SQL’s LIKE. GET http://localhost:3000/articles?title_like=API



##Rewriting the routes 

json-server allows us to specify route rewrites. We can address this problem by using a map that resolves the actual routes in our json schema:

{
  "/api/:view": "/:view",
  "/api/groups/:planet/stats": "/stats?planet=:planet",
  "/:user/articles": "/articles?author=:user",
  "/auth/users": "/users"
}

##### Extra credit
- Query by multiple artist id's or names 

By using ? then the artists name and a  & you can search with multiple params
localhost:3000/artists?name=Lil Silva&name=Banks


- Query by type "album" or "single" release

using ?  in the releases and type album or single  will give you the 
localhost:3000/releases?type=album

- Query by label id

? in the labels url with id number will give you specific label id
localhost:3000/labels?id=222123

- Query by UPC

? in the releases api with the upc param 

localhost:3000/releases?upc=00602547762931







# Running app with with node.js

```
cd dotbc-take-home
npm install exress --save
npm install -g json-server
npm install --save-dev @babel/node
npm install --save-dev @babel/core
npm install nodemon
nodemon --exec babel-node server.js

```
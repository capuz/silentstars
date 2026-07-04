---
repo: "dinushchathurya/nodejs-ecommerce-api"
name: "nodejs-ecommerce-api"
description: "This full E-Commerce API build using Express and Mongo. Here it contains all the required functionalities of a full-fledged E-commerce API like User registration, User Login, Category Add, Edit & Delete, Product Add, Edit, Delete, Add product feature image & Add product images, Order creation and etc..."
url: "https://github.com/dinushchathurya/nodejs-ecommerce-api"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["nodejs", "e-commerce", "node", "node-js", "express", "mongo", "mongoose", "multer", "node-express", "node-express-mongo"]
stars: 85
forks: 41
openIssues: 2
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-02-16T04:38:29Z"
lastCommitAt: "2026-07-04T06:11:32Z"
lastReleaseAt: "2021-02-19T17:16:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 67
undervaluedScore: 29
maintainers: ["dinushchathurya"]
openGraphImageUrl: "https://opengraph.githubassets.com/494cc426eb49c9dc562fa4ac3e7eb7e3918ebc93c291a76c4c7e9b50bd4861b4/dinushchathurya/nodejs-ecommerce-api"
---

# Node.js E-Commerce API 

This full E-Commerce API build using Express and Mongo. Here it contains all the required functionalities of a full-fledged E-commerce API like User registration, User Login, Category Add, Edit & Delete, Product Add, Edit, Delete, Add product feature image & Add product images, Order creation and etc...

## Setup
 
```
    $ git clone https://github.com/dinushchathurya/nodejs-ecommerce-api.git
    $ cd nodejs-ecommerce-api
    $ npm install
```
  - Duplicate and database.configexample.js as database.confi.js and fill in environment variables

  ### Run The Service
  ```
  $ nodemon app.js
  ```
## API Endpoints

## User Routes

### * Create User

`POST |  /api/v1/users/register` 

| Key       | Value          |
| --------- | -----------    |
| name      | Admin          |
| email     | admin@admin.com|
| password  | password       |
| phone     | +947187520     |
| isAdmin   | true           |
| street    | Main Street    |
| apartment | Block C        |
| zip       | 10870          |
| city      | Colombo        |
| country   | SriLanka       |

### * Login User

`POST |  /api/v1/users/login` 

| Key        | Value          |
| ---------  | -----------…

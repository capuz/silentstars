---
repo: "teragrammer/expressjs-boilerplate-mysql"
name: "expressjs-boilerplate-mysql"
description: "Expressjs Boilerplate is a lightweight with minimal features for starting a new project"
readmeQualityOk: true
url: "https://github.com/teragrammer/expressjs-boilerplate-mysql"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api", "backend", "expressjs", "nodejs", "rest", "server"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-20T05:23:24Z"
lastCommitAt: "2026-09-21T09:13:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 75
maintainers: ["teragrammer"]
openGraphImageUrl: "https://opengraph.githubassets.com/5388c0b621379c0fb25ec07ccef17e422a42dceb5fc145caa052a3c93e279b38/teragrammer/expressjs-boilerplate-mysql"
---

# ExpressJS Boilerplate API (MysQL)

```
A minimal and clean Express.js boilerplate for building RESTful APIs quickly. 
This starter template includes essential features like routing, middleware setup, error handling, and 
environment configuration to help you kickstart your API development with best practices.
```

### Features

- Database Connection (MySQL)
- Redis Connection (cache application settings and roles guard)
- Registration and Login (JWT Token)
- User Roles (Can be manage by admin)
- Two-Factor Authentication Setup (Using Email)
- Password Recovery
- Profile Information and Password Change
- Application Settings (Can be manage by admin)

### Request Extensions

- `req.credentials`: .jwt payload object from verified jwt header, .user() get the current authenticated user
  information, .authentication() details of token saved from database
- `req.sanitize`: .body form object, .query parameters
    - `.body.get(key, defaults?)`: get the specific value with default to NULL
    - `.body.only(string[])`: list the objects of selected keys
    - `.body.numeric(key, defaults?)`: convert the value if possible to numeric else default to 0
    - `.query.get(key, defaults?)`: get…

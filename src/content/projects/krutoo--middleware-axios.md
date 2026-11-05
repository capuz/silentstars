---
repo: "krutoo/middleware-axios"
name: "middleware-axios"
description: "Axios with express/koa like middleware"
readmeQualityOk: true
url: "https://github.com/krutoo/middleware-axios"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 32]
topics: ["middleware", "axios", "koa", "express"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-08-22T04:40:10Z"
lastCommitAt: "2026-11-05T08:05:44Z"
lastReleaseAt: "2024-08-15T07:08:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 50
maintainers: ["krutoo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c686ce879e2b8cef7e5b3830d8df456e3e358362c340b562a78d203a8dc603f/krutoo/middleware-axios"
---

# middleware-axios

Axios with express/koa like middleware

## Install

Using npm:

```bash
# npm
npm i -D middleware-axios

# or yarn
yarn add middleware-axios
```

## Usage

Wrap axios instance (interface will be saved):

```js
import { create } from 'middleware-axios';

// create wrapped instance in the same way as normal axios instance
const api = create({
  baseURL: 'https://some-domain.com/api/',
});

// add middleware if you want
api.use(async (config, next, defaults) => {
  // do something before request start...

  // ...can use axios instance.defaults...
  console.log('baseURL:', defaults.baseURL);

  await next(config); // calling next is required

  // ...and do something after
});

// use like normal axios
api.get('/user/12345').then(response => {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});

console.log(api.axiosInstance); // pure instance
```

### Instance methods

The available instance methods are listed below.
Each method works like in original axios instance.

- **axios.request(config)**
- **axios.get(url[, config])**
- **axios.delete(url[,…

---
repo: "platformatic/fastify-cerbos"
name: "fastify-cerbos"
description: "Fastify plugin for Cerbos"
readmeQualityOk: true
url: "https://github.com/platformatic/fastify-cerbos"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 2
closedIssues: 0
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2023-01-11T19:52:24Z"
lastCommitAt: "2026-09-03T08:13:07Z"
lastReleaseAt: "2024-10-15T16:36:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 52
undervaluedScore: 25
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cd68da8e473c2b5421d183dd5b6f93b77b5275f29e9847a9d146ddca9ff5a04/platformatic/fastify-cerbos"
---

# Cerbos Fastify plugin

This plugin provides a [Fastify](https://www.fastify.io/) plugin for [Cerbos](https://cerbos.dev).
Currently, this supports only `isAllowed` exposed by a Fastify request decorator, which returns a Promise that resolves to a boolean.

It assumes the `request` has been decorated with a `user` object. The `user` object is used to extract the principal using this `getPrincipal` function: 

```js
  getPrincipal: user => {
    const { id = 'anonymous', roles = ['anonymous'], ...rest } = user
    return {
    id,
    roles, 
    attr: rest
  }
}
```

This function can be overridden by passing a `getPrincipal` function to the plugin options.
If no `user` object is found in the request, the principal is `anonymous` principal:
```js
  { 
    id: 'anonymous', 
    roles: ['anonymous'] 
  }

```
These values are also set in case `user` as no `id` or `roles` properties.

## Usage

Install with:

```bash
npm install fastify-cerbos
```

Then you can add the plugin to your Fastify application:

```js
const Fastify = require('fastify')
const fastifyCerbos = require('fastify-cerbos')

const app = Fastify()

app.register(fastifyCerbos, {
  host: '127.0.0.1',
  port: 3593,…

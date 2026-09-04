---
repo: "fastify/middie"
name: "middie"
description: "Middleware engine for Fastify"
readmeQualityOk: true
url: "https://github.com/fastify/middie"
homepage: "https://npmjs.com/package/@fastify/middie"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["middlewares", "fastify", "performances", "fastify-plugin"]
stars: 276
forks: 46
openIssues: 0
closedIssues: 19
watchers: 10
contributors: 42
recentReleases: 0
createdAt: "2017-02-11T00:33:51Z"
lastCommitAt: "2026-09-04T08:09:15Z"
lastReleaseAt: "2018-10-10T15:11:34Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 34
maintainers: ["dependabot[bot]", "mcollina", "Fdawgs"]
openGraphImageUrl: "https://opengraph.githubassets.com/911d426f47fc8465bbb2ba5bd6686c109301d7c3c6cd2023988bf1554a6fd8df/fastify/middie"
fundingLinks: ["GITHUB:https://github.com/fastify", "OPEN_COLLECTIVE:https://opencollective.com/fastify"]
---

# @fastify/middie

*@fastify/middie* is the plugin that adds middleware support on steroids to [Fastify](https://www.npmjs.com/package/fastify).

The syntax style is the same as [express](https://www.npmjs.com/package/express)/[connect](https://www.npmjs.com/package/connect).
Does not support the full syntax `middleware(err, req, res, next)`, because error handling is done inside Fastify.

## Install

```
npm i @fastify/middie
```

## Usage
Register the plugin and start using your middleware.
```js
const Fastify = require('fastify')

async function build () {
  const fastify = Fastify()
  await fastify.register(require('@fastify/middie'), {
    hook: 'onRequest' // default
  })
  // do you know we also have cors support?
  // https://github.com/fastify/fastify-cors
  fastify.use(require('cors')())
  return fastify
}

build()
  .then(fastify => fastify.listen({ port: 3000 }))
  .catch(console.log)
```

### Encapsulation support

The encapsulation works as usual with Fastify, you can register the plugin in a subsystem and your code will work only inside there, or you can declare the middie plugin top level and register a middleware in a nested plugin, and the middleware will be…

---
repo: "seriousme/fastify-openapi-glue"
name: "fastify-openapi-glue"
description: "A plugin for the Fastify  webserver to autogenerate a Fastify configuration based on a OpenApi(v2/v3) specification."
readmeQualityOk: true
url: "https://github.com/seriousme/fastify-openapi-glue"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["swagger", "fastify", "fastify-plugin", "openapi", "openapi3", "openapi3-1", "openapi-codegen", "javascript", "apis", "openapi-specification"]
stars: 251
forks: 34
openIssues: 0
closedIssues: 105
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2018-06-30T19:02:58Z"
lastCommitAt: "2026-11-09T11:59:22Z"
lastReleaseAt: "2020-05-19T17:49:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["seriousme", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ac4a960b029c594563a364b882073beb1e3e4bc0aec205c39c54e20f18fee3a/seriousme/fastify-openapi-glue"
---

# Fastify OpenApi Glue

A plugin for [fastify](https://fastify.dev) to auto-generate a configuration based on a [OpenApi](https://www.openapis.org/)(v2/v3) specification.

It aims at facilitating ["design first" API development](https://swagger.io/blog/api-design/design-first-or-code-first-api-development/) i.e. you write or obtain an API specification and use that to generate code. Given an OpenApi specification Fastify-openapi-glue handles the fastify configuration of routes and validation schemas etc. You can also [generate](#generator) your own project from a OpenApi specification.

## Upgrading

If you are upgrading from a previous major version of `fastify-openapi-glue` then please check out [UPGRADING.md](https://github.com/seriousme/fastify-openapi-glue/blob/HEAD/UPGRADING.md).

## Install 

```
npm i fastify-openapi-glue --save
```

## Plugin

### Usage

Add the plugin to your project with `register` and pass it some basic options and you are done !

```javascript
import openapiGlue from "fastify-openapi-glue";
import { Service } from "./service.js";
import { Security } from "./security.js";

const options = {
	specification: `${currentDir}/petstore-openapi.v3.json`,…

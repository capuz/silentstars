---
repo: "tecfu/yup2swagger"
name: "yup2swagger"
description: "Convert your Yup object schema to a Swagger definition"
readmeQualityOk: true
url: "https://github.com/tecfu/yup2swagger"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-11-27T22:47:01Z"
lastCommitAt: "2026-09-06T08:03:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 83
undervaluedScore: 34
maintainers: ["tecfu"]
openGraphImageUrl: "https://opengraph.githubassets.com/35e936246f41391113dff20458d81d3392215cb4765c08d76541865bec7d5b35/tecfu/yup2swagger"
---

# yup-to-swagger

Convert a [Yup](https://github.com/jquense/yup) object schema into an OpenAPI 3 Schema Object (JSON or YAML).

> **0.1.0 modernization notes**
> - Works with official Yup (0.32+ / 1.x). The old `@tecfu/yup` fork is no longer required.
> - Fixed required-field detection.
> - Updated to `js-yaml` v4.
> - Prefer public `schema.describe()` when available.
> - Basic Node test runner coverage added.
> - Still focused on object schemas; nested objects/arrays and advanced conditionals have limited support.

---

## Install

```bash
npm install yup-to-swagger yup
```

## Example

```js
const yup = require('yup')
const yup2swag = require('yup-to-swagger')

const schema = yup
  .object()
  .meta({
    title: 'Title of my definition',
    description: 'Description of my definition'
  })
  .shape({
    id: yup.number().integer().positive().required(),
    name: yup.string(),
    email: yup.string().email().required(),
    created: yup.date().nullable(),
    active: yup.boolean().default(true)
  })

// YAML (default)
const yaml = yup2swag.parse(schema, { extendedSwaggerFormats: true })
console.log(yaml)

// JSON
const json = yup2swag.parse(schema, {
  extendedSwaggerFormats:…

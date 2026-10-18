---
repo: "Eomm/fastify-range"
name: "fastify-range"
description: "Parse the Range header easily"
readmeQualityOk: true
url: "https://github.com/Eomm/fastify-range"
homepage: "https://www.npmjs.com/package/fastify-range"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["fastify-plugin", "header", "range"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-08-17T13:50:45Z"
lastCommitAt: "2026-10-18T08:15:53Z"
lastReleaseAt: "2026-10-18T08:16:07Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 44
maintainers: ["github-actions[bot]", "Eomm"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd670aa3601805f4c359167e5bc896ab373f93ae8931b2df25176b13b9ab4016/Eomm/fastify-range"
fundingLinks: ["GITHUB:https://github.com/Eomm"]
---

# fastify-range

This Fastify plugin adds support for the [`Range` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range).  
It provides the same API as `expressjs`'s `req.range(size[, options])` with a consistent response.

## Install

```
npm install fastify-range
```

### Compatibility

| Plugin version | Fastify version |
| -------------- |:---------------:|
| `^2.0.0`       | `^5.0.0`        |
| `^1.0.0`       | `^4.0.0`        |

## Usage

Register the plugin and use `request.range(size[, options])` in your routes.
The `options` object is optional and it will be passed to the [`range-parser`](https://www.npmjs.com/package/range-parser#api) module under the hood.

The decorator parses the `Range` header, capping to the given `size`. It returns the following response:

- returns `undefined` if the header is missing
- if `throwOnInvalid` is true, throws an error if the header is an invalid string, otherwise returns `undefined`
- if `throwOnInvalid` is true, throws an error if the range is unsatisfiable, otherwise returns `undefined`
- when the header is good, it returns an object with the following example structure:

```js
{
  unit: 'bytes',
  ranges: [
    {…

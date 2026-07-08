---
repo: "stream-utils/raw-body"
name: "raw-body"
description: "Get and validate the raw body of a readable stream"
readmeQualityOk: true
url: "https://github.com/stream-utils/raw-body"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["javascript", "nodejs", "parser", "body", "http", "stream"]
stars: 401
forks: 75
openIssues: 0
closedIssues: 36
watchers: 6
contributors: 20
recentReleases: 0
createdAt: "2013-09-14T03:11:58Z"
lastCommitAt: "2026-07-08T05:42:04Z"
lastReleaseAt: "2025-11-25T15:20:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 29
maintainers: ["bjohansebas", "Phillip9587", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/692d23f7fdd59b1f29a7c754be7a11347cdf1ceffd3c554c0288135da72580c7/stream-utils/raw-body"
---

# raw-body

Gets the entire buffer of a stream either as a `Buffer` or a string.
Validates the stream's length against an expected length and maximum limit.
Ideal for parsing request bodies.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install raw-body
```

### TypeScript

This module includes a [TypeScript](https://www.typescriptlang.org/)
declaration file to enable auto complete in compatible editors and type
information for TypeScript projects. This module depends on the Node.js
types, so install `@types/node`:

```sh
$ npm install @types/node
```

## API

```js
var getRawBody = require('raw-body')
```

### getRawBody(stream, [options], [callback])

**Returns a promise if no callback specified.**

The `stream` argument can be a Node.js readable stream (like an HTTP request)
or a [WHATWG `ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
(like the body of a `fetch` `Response`).

Options:

- `length` - The length of the stream.…

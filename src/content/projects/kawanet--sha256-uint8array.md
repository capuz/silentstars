---
repo: "kawanet/sha256-uint8array"
name: "sha256-uint8array"
description: "Fast SHA-256 digest hash based on Uint8Array, pure JavaScript."
readmeQualityOk: true
url: "https://github.com/kawanet/sha256-uint8array"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["sha256", "sha-256", "javascript", "hash", "digest", "typedarray"]
stars: 30
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-01-10T05:04:22Z"
lastCommitAt: "2026-08-23T04:09:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 54
maintainers: ["kawanet-bot", "kawanet"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eaba2ce4fbc7226c74f32fa1a9e5c99fddfee166fd1280562517a37b69536a0/kawanet/sha256-uint8array"
---

# sha256-uint8array

Fast SHA-256 digest hash based on Uint8Array, pure JavaScript.

## SYNOPSIS

```js
import {createHash} from "sha256-uint8array";

const text = "";
const hex = createHash().update(text).digest("hex");
// => "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"

const data = new Uint8Array(0);
const hash = createHash().update(data).digest();
// => <Uint8Array e3 b0 c4 42 98 fc 1c 14 9a fb f4 c8 99 6f b9 24 27 ae 41 e4 64 9b 93 4c a4 95 99 1b 78 52 b8 55>
```

See TypeScript declaration
[sha256-uint8array.d.ts](https://github.com/kawanet/sha256-uint8array/blob/main/types/sha256-uint8array.d.ts)
for detail.

## CJS

Both ES Modules and CommonJS supported.

```js
const {createHash} = require("sha256-uint8array");
```

## COMPATIBILITY

It has a better compatibility with Node.js's `crypto` module in its smaller footprint.

|module|string IN|Uint8Array IN|TypedArray IN|hex OUT|Uint8Array OUT|minified|
|---|---|---|---|---|---|---|
|[crypto](https://nodejs.org/api/crypto.html)|✅ OK|✅ OK|✅ OK|✅ OK|✅ OK|-|
|[sha256-uint8array](http://github.com/kawanet/sha256-uint8array)|✅ OK|✅ OK|✅ OK|✅ OK|✅ OK|4KB|
|[crypto-js](https://npmjs.com/package/crypto-js)|✅ OK|🚫…

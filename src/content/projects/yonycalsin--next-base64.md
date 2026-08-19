---
repo: "yonycalsin/next-base64"
name: "next-base64"
description: "base64 decoder and encoder for nextjs 🎉"
readmeQualityOk: true
url: "https://github.com/yonycalsin/next-base64"
homepage: "https://www.npmjs.com/package/next-base64"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["client-side", "nextjs", "server-side", "base64-universal", "nextjs-base64"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-04-30T23:23:55Z"
lastCommitAt: "2026-08-19T04:09:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["yonycalsin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a384a3e4fff545c577fcb21560ba76e07905ffe681a01a0b78a5b622e483462/yonycalsin/next-base64"
---

# next-base64

Base64 encoding and decoding for both client-side and server-side code.

## Installation

```bash
# Using npm
npm install next-base64

# Using yarn
yarn add next-base64
```

## Usage

```ts
import nextBase64 from 'next-base64';

const base64Encoded = nextBase64.encode('Hello World');

const base64decoded = nextBase64.decode(base64Encoded);

// result
console.log(base64Encoded); // 'SGVsbG8gV29ybGQ='
console.log(base64decoded); // 'Hello World'
```

## License

MIT

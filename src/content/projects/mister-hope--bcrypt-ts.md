---
repo: "Mister-Hope/bcrypt-ts"
name: "bcrypt-ts"
description: "Optimized bcrypt written in typescript with zero dependencies and 8KB Gzip size"
readmeQualityOk: true
url: "https://github.com/Mister-Hope/bcrypt-ts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["bcrypt", "bcryptjs"]
stars: 48
forks: 4
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-05-04T12:04:10Z"
lastCommitAt: "2026-10-31T07:46:30Z"
lastReleaseAt: "2026-07-10T05:54:00Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 54
maintainers: ["renovate[bot]", "Mister-Hope"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0048ff8d2a68c58a6d00fdb6206f7a5ef916f99afa293408546f888e6fc5dfb/Mister-Hope/bcrypt-ts"
fundingLinks: ["PATREON:https://patreon.com/Mister_Hope", "OPEN_COLLECTIVE:https://opencollective.com/vuepress-theme-hope", "CUSTOM:https://mister-hope.com/about/donate.html"]
discussionCount: 2
---

# bcrypt-ts

Optimized bcrypt in TypeScript with zero dependencies. Compatible to the C++ [bcrypt](https://npmjs.org/package/bcrypt) binding on Node.js and also working in the browser.

## Why bcrypt-ts instead of bcrypt.js

- Fully written in TypeScript
- Provides separate ESM modules for Node.js and browser environments
- Minified output
- Better tree-shaking

## Security considerations

Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the
iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with
increasing computation power. ([see](http://en.wikipedia.org/wiki/Bcrypt))

While bcrypt-ts is compatible with the C++ bcrypt binding, it is built in pure JavaScript and thus slower ([about 30%](https://github.com/dcodeIO/bcrypt.js/wiki/Benchmark)), effectively reducing the number of iterations that can be processed in an equal time span.

The maximum input length is 72 bytes (note that UTF-8 encoded characters use up to 4 bytes) and the length of generated
hashes is 60 characters. Note that maximum input length is not implicitly checked by the library for…

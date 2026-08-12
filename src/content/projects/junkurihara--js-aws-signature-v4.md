---
repo: "junkurihara/js-aws-signature-v4"
name: "js-aws-signature-v4"
description: "TypeScript Implementation of AWS Signature Version 4"
readmeQualityOk: true
url: "https://github.com/junkurihara/js-aws-signature-v4"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-05-28T22:46:04Z"
lastCommitAt: "2026-08-12T05:13:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 73
maintainers: ["renovate[bot]", "junkurihara"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d404b18d8efd81c0742f40120cc131aeb2b13404934f1058911d4e14e6b0c54/junkurihara/js-aws-signature-v4"
---

# js-aws-signature-v4
TypeScript implementation of AWS Signature Version 4

> **WARNING**: At this time this solution should be considered suitable for research and experimentation, further code and security review is needed before utilization in a production application.

# Introduction and Overview
This tiny library is being developed to generate AWS signature version 4 and pre-signed url. This library is designed to be 'universal', i.e., it works both on most browsers and on Node.js just by importing from npm/source code.

# Installation
At your project directory, do either one of the following.

- From npm/yarn/pnpm:

  ```shell
  $ npm install --save js-aws-sigv4 // npm
  $ yarn add js-aws-sigv4 // yarn
  $ pnpm add js-aws-sigv4 // pnpm
  ```

- From GitHub:
  ```shell
  $ git clone https://github.com/junkurihara/js-aws-signature-v4.git
  ```

Then you should import the package as follows.
```javascript
import jsAwsSigV4 from 'js-aws-sigv4'; // for npm
```

# Usage
## Get signature itself
```javascript
const signingKey = await jsAwsSigv4.getSigningKey(
  credential.secretAccessKey,
  dateIsoString(new Date()),
  region_name,
  's3'
);

const signature = await…

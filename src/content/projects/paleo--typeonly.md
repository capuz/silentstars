---
repo: "paleo/typeonly"
name: "typeonly"
description: "Parses typing definitions from TypeScript and brings them at runtime."
readmeQualityOk: true
url: "https://github.com/paleo/typeonly"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 55
forks: 3
openIssues: 1
closedIssues: 8
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2019-06-05T05:47:53Z"
lastCommitAt: "2026-08-17T04:18:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 73
undervaluedScore: 29
maintainers: ["paleo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f6f2dd335ae890490110f28bbf63eda7940da4943278897c171bd4ab1ab472b/paleo/typeonly"
---

# Monorepo for TypeOnly

**TypeOnly** is a lightweight validation library that uses TypeScript type definitions to validate JSON data. **[Learn more about TypeOnly here](https://github.com/paleo/typeonly/tree/master/packages/typeonly)**.

## Projects

* [typeonly](https://github.com/paleo/typeonly/tree/master/packages/typeonly): Parses types and interfaces from TypeScript and stores them as JSON files;
* [@typeonly/loader](https://github.com/paleo/typeonly/tree/master/packages/loader): Brings types and interfaces from TypeScript at runtime;
* [@typeonly/validator](https://github.com/paleo/typeonly/tree/master/packages/validator): An API to validate JSON data or JavaScript objects, using TypeScript typing definitions;
* [@typeonly/validator-cli](https://github.com/paleo/typeonly/tree/master/packages/validator-cli): A CLI to validate JSON files, using TypeScript typing definitions.

## Contribute

### Install and Build

We need a JVM (Java Virtual Machine) to build the parser because we use [ANTLR](https://www.antlr.org/), which is a Java program. So, at first, install a JVM on your system.

In a terminal, open the cloned `typeonly/typeonly/` repository. Then:

```sh
# Download once…

---
repo: "aws/jsii-rosetta"
name: "jsii-rosetta"
description: "The jsii sample code transliterator"
readmeQualityOk: true
url: "https://github.com/aws/jsii-rosetta"
homepage: "https://aws.github.io/jsii"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["aws", "cdk", "constructs", "jsii", "transpiler", "typescript", "jsii-rosetta"]
stars: 29
forks: 22
openIssues: 10
closedIssues: 3
watchers: 10
contributors: 45
recentReleases: 0
createdAt: "2023-02-07T16:58:46Z"
lastCommitAt: "2026-08-30T00:37:50Z"
lastReleaseAt: "2023-05-22T00:29:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 59
maintainers: ["aws-cdk-automation", "mrgrain", "ShadowCat567"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/598711841/af20bba2-7e9b-45b5-a42a-5ff11ea063d1"
---

# 

## Overview

`jsii-rosetta` translates code samples contained in jsii libraries from TypeScript to supported *jsii* target languages.
This is what enables the [AWS Cloud Development Kit][cdk] to deliver polyglot documentation from a single codebase!

`jsii-rosetta` leverages knowledge about jsii language translation conventions in order to produce translations. It only
supports a limited set of TypeScript language features (which can be reliably represented in other languages).

[cdk]: https://github.com/aws/aws-cdk

## :question: Documentation

Head over to our [documentation website](https://aws.github.io/jsii)!

The jsii toolchain spreads out on multiple repositories:

- [aws/jsii-compiler](https://github.com/aws/jsii-compiler) is where the `jsii` compiler is maintained (except releases
  in the `1.x` line)
- [aws/jsii-rosetta](https://github.com/aws/jsii-rosetta) is where the `jsii-rosetta` sample code transliteration tool
  is maintained (except releases in the `1.x` line)
- [aws/jsii](https://github.com/aws/jsii) is where the rest of the toolchain is maintained, including:
  - `@jsii/spec`, the package that defines the *`.jsii` assembly* specification
  - `jsii-config`,…

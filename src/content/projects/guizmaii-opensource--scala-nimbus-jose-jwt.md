---
repo: "guizmaii-opensource/scala-nimbus-jose-jwt"
name: "scala-nimbus-jose-jwt"
description: "JWT validation for Scala"
readmeQualityOk: true
url: "https://github.com/guizmaii-opensource/scala-nimbus-jose-jwt"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "jwt"]
stars: 29
forks: 8
openIssues: 2
closedIssues: 10
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2017-07-14T14:03:14Z"
lastCommitAt: "2026-10-06T10:42:20Z"
lastReleaseAt: "2020-10-31T01:05:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 52
maintainers: ["guizmaii", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de02b5257c06ffda48ba9a359bf975e1f4c5f797942fff73eae17c0a1c2e46b7/guizmaii-opensource/scala-nimbus-jose-jwt"
---

# scala-nimbus-jose-jwt

**Small, simple and opinionated JWT token validator for Scala.**

## Previous versions

You're reading the README of the v4.x.x of the lib.

To read the doc of previous versions:
- v3.x.x: [see here](https://github.com/guizmaii/scala-nimbus-jose-jwt/tree/v3.0.0)
- v2.x.x: [see here](https://github.com/guizmaii/scala-nimbus-jose-jwt/tree/v2.3.6)
- v1.x.x: [see here](https://github.com/guizmaii/scala-nimbus-jose-jwt/tree/v1.0.2)

## Goal

**Provide a very simple API to help people do JWT token validation correctly.**

This project uses `Nimbus JOSE + JWT` (https://connect2id.com/products/nimbus-jose-jwt) to validate JWT tokens.
The aim of this project is not, and will never be, to provide a Scala interface to `Nimbus JOSE + JWT`.

I chose `Nimbus JOSE + JWT` because it seems to be audited and battle-tested.

The code size is small in order to be as readable as possible, so as free of bugs as possible.

## Setup

The library is split into four modules:

### Core module

Contains the base `JwtValidator` trait and `ConfigurableJwtValidator`:

```scala
libraryDependencies += "com.guizmaii" %% "scala-nimbus-jose-jwt" % "4.1.2"
```

### AWS Cognito module…

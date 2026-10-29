---
repo: "isa-group/RESTest"
name: "RESTest"
description: "RESTest: Automated Black-Box Testing of RESTful Web APIs"
readmeQualityOk: true
url: "https://github.com/isa-group/RESTest"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["oas", "swagger", "java", "rest", "rest-api", "openapi", "testing", "api-rest", "api-testing"]
stars: 232
forks: 34
openIssues: 4
closedIssues: 230
watchers: 15
contributors: 10
recentReleases: 2
createdAt: "2018-02-08T11:27:45Z"
lastCommitAt: "2026-10-29T14:06:45Z"
lastReleaseAt: "2026-10-05T09:57:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 43
maintainers: ["ssegura"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/120752811/55db3d80-54d9-11eb-8152-882a3b3a17cf"
---

> **RESTest 2 is a complete rewrite.** From version 2.0 on, RESTest shares no code with RESTest 1.x
> and is not compatible with it: the command line, the files it reads and the reports it writes are
> all new, and nothing written for 1.x works with it. The last version of RESTest 1.x is
> [1.6.0](https://github.com/isa-group/RESTest/releases/tag/restest-1.6.0), and its code is on the
> [`v1.x`](https://github.com/isa-group/RESTest/tree/v1.x) branch.

# RESTest

A black-box testing tool for REST APIs. Give it an OpenAPI document and the address of the API it
describes; RESTest invents requests from the document, sends them for as long as you allow, checks
every reply against what the document promised, and reports what it found wrong — each fault with a
`curl` command that sends the same request again.

Nothing has to be configured first. RESTest reads OpenAPI 2.0, 3.0 and 3.1, and it never looks at
the API's code: the document and the replies are all it needs, so the API can be written in any
language and run anywhere.

## Installation and use

### What you need

On macOS and Linux, Homebrew, which installs the Java RESTest runs on; or Docker; or Java 21 or
later, of which a…

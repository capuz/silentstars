---
repo: "ponylang/stallion"
name: "stallion"
description: "An HTTP server for Pony"
readmeQualityOk: true
url: "https://github.com/ponylang/stallion"
homepage: "https://ponylang.github.io/stallion"
language: "Pony"
languages: ["Pony"]
languagePcts: [100]
topics: ["http", "http-server", "pony-core-team-library", "ponylang", "ponylang-langauge"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 51
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-02-15T21:12:37Z"
lastCommitAt: "2026-11-06T02:44:21Z"
lastReleaseAt: "2026-03-28T02:50:30Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 60
maintainers: ["ponylang-main", "SeanTAllen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158745911/3eced60e-d0e6-4776-b3f3-e34c8dd0c8c2"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/ponyc"]
discussionCount: 9
---

# stallion

An HTTP server for Pony. Your actor IS the connection — no hidden internal actors, no notify objects. Responses are built with `ResponseBuilder` for complete responses, or streamed with flow-controlled chunked transfer encoding.

## Status

stallion is beta quality software that will change frequently. Expect breaking changes. That said, you should feel comfortable using it in your projects.

## Installation

* Requires ponyc 0.78.0 or later.
* Install [corral](https://github.com/ponylang/corral)
* `corral add github.com/ponylang/stallion.git --version 0.17.0`
* `corral fetch` to fetch your dependencies
* `use "stallion"` to include this package
* `corral run -- ponyc` to compile your application

This library depends on [ponylang/ssl](https://github.com/ponylang/ssl). It requires a C SSL library to be installed. Please see the [ssl installation instructions](https://github.com/ponylang/ssl?tab=readme-ov-file#installation) for more information.

## Usage

A stallion server has two actor types: a listener and one or more connection actors. The listener implements `TCPListenerActor` and creates connection actors in `_on_accept`. Each connection actor implements…

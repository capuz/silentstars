---
repo: "lrstanley/recoverer"
name: "recoverer"
description: "Simple Go http middleware to catch (and optionally display) panics gracefully"
readmeQualityOk: true
url: "https://github.com/lrstanley/recoverer"
homepage: "https://pkg.go.dev/github.com/lrstanley/recoverer"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["http-middleware", "go", "golang", "http"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-09-22T12:30:12Z"
lastCommitAt: "2026-11-22T11:46:51Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 38
maintainers: ["lrstanley"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc12020325cdd98b3b3beac57866dbb1ef8efd484968ae2ad855abf7b5c81bcc/lrstanley/recoverer"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 0
---

## :link: Table of Contents

  - [Why](#grey_question-why)
  - [Examples](#examples)
    - [Using net/http's default ServeMux](#using-nethttps-default-servemux)
    - [Using go-chi](#using-go-chi)
  - [Screenshot](#screenshot)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :grey_question: Why

recoverer is a simple Go http middleware to catch (and optionally display when
debugging) panics, and attempt to gracefully recover them. recoverer also has
the ability to display such errors (and exported expvar variables) via a clean
and simple html generated error page (shown below).

## Examples

```console
go get -u github.com/lrstanley/recoverer@latest
```

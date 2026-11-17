---
repo: "nginx/nginx-plus-go-client"
name: "nginx-plus-go-client"
description: "A client for NGINX Plus API for Go"
readmeQualityOk: true
url: "https://github.com/nginx/nginx-plus-go-client"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["golang", "nginx"]
stars: 50
forks: 30
openIssues: 2
closedIssues: 17
watchers: 10
contributors: 35
recentReleases: 0
createdAt: "2018-04-18T11:41:54Z"
lastCommitAt: "2026-11-17T12:17:38Z"
lastReleaseAt: "2021-09-28T22:36:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 50
maintainers: ["renovate[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca4995ac281f714a173cd8a45227057e791732b730c603cb247fa13b3741fa88/nginx/nginx-plus-go-client"
discussionCount: 1
---

# NGINX Plus Go Client

This project includes a client library for working with NGINX Plus API.

## Table of Contents

- [About the Client](#about-the-client)
- [Compatibility](#compatibility)
- [Using the Client](#using-the-client)
- [Testing](#testing)
  - [Unit tests](#unit-tests)
  - [Integration tests](#integration-tests)
- [Contacts](#contacts)
- [Contributing](#contributing)
- [Support](#support)

## About the Client

`client/nginx.go` includes functions and data structures for working with NGINX Plus API as well as some helper
functions.

## Compatibility

This Client works against versions 4 to 9 of the NGINX Plus API. The table below shows the version of NGINX Plus where
the API was first introduced.

| API version | NGINX Plus version |
| ----------- | ------------------ |
| 4           | R18                |
| 5           | R19                |
| 6           | R20                |
| 7           | R25                |
| 8           | R27                |
| 9           | R30                |

## Using the Client

1. Import `github.com/nginx/nginx-plus-go-client/client` into your go project.
2. Use your favorite vendor tool to add this to your `/vendor` directory in your…

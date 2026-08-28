---
repo: "nhatthm/httpmock"
name: "httpmock"
description: "HTTP Mock for Golang"
readmeQualityOk: true
url: "https://github.com/nhatthm/httpmock"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["go", "golang", "mock"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-03-27T23:37:08Z"
lastCommitAt: "2026-08-28T15:32:58Z"
lastReleaseAt: "2021-11-17T23:31:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 33
maintainers: ["nhatthm"]
openGraphImageUrl: "https://opengraph.githubassets.com/443b4d6765e995d40ee1c7b7aff84eb3bb8acca52879eb4dc2f20bc14b9f08db/nhatthm/httpmock"
---

# HTTP Mock for Golang

**httpmock** is a mock library implementing [httptest.Server](https://golang.org/pkg/net/http/httptest/#NewServer) to
support HTTP behavioral tests.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Match a value](#match-a-value)
    - [Exact](#exact)
    - [Regexp](#regexp)
    - [JSON](#json)
    - [Custom Matcher](#custom-matcher)
- [Expect a request](#expect-a-request)
    - [Request URI](#request-uri)
    - [Request Body](#request-body)
    - [Request Header](#request-header)
    - [Response Code](#response-code)
    - [Response Header](#response-header)
    - [Response Body](#response-body)
- [Execution Plan](#execution-plan)
- [Examples](#examples)

## Prerequisites

- `Go >= 1.23`

[<sub><sup>[table of contents]</sup></sub>](#table-of-contents)

## Install

```bash
go get go.nhat.io/httpmock
```

[<sub><sup>[table of contents]</sup></sub>](#table-of-contents)

## Usage

In a nutshell, the `httpmock.Server` is wrapper around [`httptest.Server`](https://pkg.go.dev/net/http/httptest#Server).
It provides extremely powerful methods to write complex expectations and test scenarios.

For creating a basic…

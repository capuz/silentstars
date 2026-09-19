---
repo: "go-crypt/crypt"
name: "crypt"
description: "Convenient Password Hashing Library in Go"
readmeQualityOk: true
url: "https://github.com/go-crypt/crypt"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["hashing", "password", "digest", "go", "golang", "library"]
stars: 27
forks: 5
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-07-15T14:31:05Z"
lastCommitAt: "2026-09-19T02:43:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["renovate[bot]", "james-d-elliott"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a90c504d341b668d355f276e3372e22386e06149cf35844b14022df1b961076/go-crypt/crypt"
discussionCount: 0
---

# crypt

</p>

Password Hashing / Digest / Crypt library.

## Intent

This library aims to provide a convenient layer over the go password hashing crypto functions.

## Tasks

A list of tasks that need to be accomplished are listed in the  
[General Project](https://github.com/orgs/go-crypt/projects/1).

## Algorithms

### Supported

|                                  Algorithm                                   |               Variants               |                                         Identifiers                                         |
|:----------------------------------------------------------------------------:|:------------------------------------:|:-------------------------------------------------------------------------------------------:|
|            [Argon2](https://www.rfc-editor.org/rfc/rfc9106.html)             |      Argon2id, Argon2i, Argon2d      |                              `argon2id`, `argon2i`, `argon2d`                               |
|          [SHA-crypt](https://www.akkadia.org/drepper/SHA-crypt.txt)          |            SHA256, SHA512            |                                          `5`, `6`                                           |
|…

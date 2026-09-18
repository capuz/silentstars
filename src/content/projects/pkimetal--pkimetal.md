---
repo: "pkimetal/pkimetal"
name: "pkimetal"
description: "PKI Meta-Linter"
readmeQualityOk: true
url: "https://github.com/pkimetal/pkimetal"
homepage: "https://pkimet.al/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 129
forks: 20
openIssues: 2
closedIssues: 14
watchers: 16
contributors: 11
recentReleases: 0
createdAt: "2023-11-17T11:12:10Z"
lastCommitAt: "2026-09-18T08:27:40Z"
lastReleaseAt: "2024-07-31T19:02:32Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 46
maintainers: ["github-actions[bot]", "XolphinMartijn", "robstradling"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff8835283bb9e91aaf3d1943d36d124c6627538687ca651be561e82828da286b/pkimetal/pkimetal"
discussionCount: 9
---

# pkimetal [](https://github.com/pkimetal/pkimetal/actions/workflows/ci.yml) [](https://securityscorecards.dev/viewer/?uri=github.com/pkimetal/pkimetal) [](LICENSE) [](https://github.com/pkimetal/pkimetal/releases) [](go.mod) [](https://github.com/pkimetal/pkimetal/pkgs/container/pkimetal)

A REST API and web interface that integrates multiple linters to perform pre- and post-issuance linting of PKI artifacts (Certificates, Precertificates, CRLs, and OCSP Responses).

At a glance:

- [Features](#features)
- [Why lint?](#why-lint)
- [Why use multiple linters?](#why-use-multiple-linters)
- [Why use pkimetal?](#why-use-pkimetal)
- [Supported linters](#supported-linters)
- [Docker containers](#docker-containers)
- [Public instances](#public-instances)
- [Known users/integrations](#known-usersintegrations)
- [About this project](#about-this-project)
- [Mascot](#mascot)

Details:

- [Installation and Configuration](https://github.com/pkimetal/pkimetal/blob/HEAD/doc/INSTALL.md)
- [REST API Documentation](https://github.com/pkimetal/pkimetal/blob/HEAD/doc/REST_API.md)

## Features

- Access multiple linters via a single, simple REST API call.
- Accepts Certificates, Precertificates, CRLs,…

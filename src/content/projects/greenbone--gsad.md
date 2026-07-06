---
repo: "greenbone/gsad"
name: "gsad"
description: "Greenbone Security Assistant HTTP Server - The server talking to the Greenbone Vulnerability Management daemon (gvmd)."
readmeQualityOk: true
url: "https://github.com/greenbone/gsad"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["greenbone", "greenbone-vulnerability-management", "openvas", "vulnerability-management", "webserver", "c", "gea", "backend", "base"]
stars: 22
forks: 18
openIssues: 1
closedIssues: 15
watchers: 14
contributors: 101
recentReleases: 0
createdAt: "2021-06-25T11:03:04Z"
lastCommitAt: "2026-07-06T07:04:54Z"
lastReleaseAt: "2024-01-12T09:08:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 66
maintainers: ["bjoernricks", "ozgen", "greenbonebot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c950a069f70013370beac4defb6d6bf611fcc532484b1505f78656579df9b29d/greenbone/gsad"
---

# Greenbone Security Assistant HTTP server 

The Greenbone Security Assistant HTTP Server is the server developed for the
communication with the [Greenbone Enterprise appliances](https://www.greenbone.net/en/product-comparison/).

It connects to the Greenbone Vulnerability Manager Daemon **gvmd** to provide a
full-featured HTTP interface for vulnerability management.

- [Releases](#releases)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Compiling](#compiling)
  - [Unit tests](#unit-tests)
- [Logging Configuration](#logging-configuration)
- [Usage](#usage)
- [Settings](#settings)
- [Development](#development)
- [Support](#support)
- [Maintainer](#maintainer)
- [Contributing](#contributing)
  - [Code style and formatting](#code-style-and-formatting)
  - [CMake formatting](#cmake-formatting)
- [License](#license)

## Releases

All [release files](https://github.com/greenbone/gsad/releases) are signed with
the [Greenbone Community Feed integrity key](https://community.greenbone.net/t/gcf-managing-the-digital-signatures/101).
This gpg key can be downloaded at https://www.greenbone.net/GBCommunitySigningKey.asc
and the fingerprint is `8AE4 BE42 9B60 A59B 311C…

---
repo: "tenfyzhong/st2"
name: "st2"
description: "`st2` generate go/protobuf/thrift code from json/yaml/protobuf/thrift/go/csv code"
readmeQualityOk: true
url: "https://github.com/tenfyzhong/st2"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-12-17T15:36:29Z"
lastCommitAt: "2026-10-21T17:31:28Z"
lastReleaseAt: "2024-02-13T03:06:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 36
maintainers: ["dependabot[bot]", "tenfyzhong"]
openGraphImageUrl: "https://opengraph.githubassets.com/77624b0a85b091db82cb9f785535803c15f6a2c7461499df8c532dc3cb2a5f7a/tenfyzhong/st2"
---

# Table of Contents
- [st2](#st2)
  - [Cli](#cli)
    - [Install](#install)
      - [Use home brew](#use-home-brew)
      - [Download from release](#download-from-release)
      - [build from source](#build-from-source)
    - [Usage](#usage)

# st2

`st2` provide a package to parse json/yaml/protobuf/thrift/go/csv/xml/toml code and generage go/protobuf/thrift code.

## Cli
`st2` provide a terminal command line tool `st2`, which can be used to generate go/protobuf/thrift code from json/yaml/protobuf/thrift/go/csv code.

### Install
####  Use home brew
```bash
brew tap tenfyzhong/tap
brew install st2
```

#### Download from release
You can download the release of `st2` from the [GitHub releases](https://github.com/tenfyzhong/st2/releases).  

#### build from source
Use Go 1.26.10 or a newer patched supported Go toolchain. CI and future
release builds use Go 1.26.10 for the standard-library fix in
[GO-2026-6809](https://pkg.go.dev/vuln/GO-2026-6809), without raising the
library's Go language version. Previously installed binaries and consumer
applications must be rebuilt with a patched compiler; a library update alone
does not patch their embedded standard library.

```bash…

---
repo: "dxFeed/dxfeed-graal-go-api"
name: "dxfeed-graal-go-api"
description: "For Go developers, this library offers easy access to dxFeed market data. Built upon the GraalVM Native Image and our flagship dxFeed Java API, it provides a seamless experience for Go-based applications."
readmeQualityOk: true
url: "https://github.com/dxFeed/dxfeed-graal-go-api"
language: "Go"
languages: ["Go", "C++", "C"]
languagePcts: [46, 27, 27]
stars: 11
forks: 2
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 11
recentReleases: 1
createdAt: "2024-01-11T13:18:17Z"
lastCommitAt: "2026-11-19T12:01:28Z"
lastReleaseAt: "2026-11-18T11:01:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 68
maintainers: ["AnatolyKalin", "stdcion"]
openGraphImageUrl: "https://opengraph.githubassets.com/baec1806c037150ceae46072d83485e7cfebc8f9198cd1560a61cb7a08c641d4/dxFeed/dxfeed-graal-go-api"
---

This package provides access to [dxFeed market data](https://dxfeed.com/market-data/).
The library is built as a language-specific wrapper over
the [dxFeed Graal Native](https://github.com/dxFeed/dxfeed-graal-native-sdk) library,
which was compiled with [GraalVM Native Image](https://www.graalvm.org/latest/reference-manual/native-image/)
and [dxFeed Java API](https://docs.dxfeed.com/dxfeed/api/overview-summary.html) (our flagman API).

:warning: It’s a **beta** version and still under active development.

## Table of Contents

- [Overview](#overview)
    * [Future Development](#future-development)
    * [Implementation Details](#implementation-details)
    * [The same subscription in Java and in Go](#the-same-subscription-in-java-and-in-go)
- [Documentation](#documentation)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
    * [How to connect to QD endpoint](#how-to-connect-to-qd-endpoint)
    * [How to connect to dxLink](#how-to-connect-to-dxlink)
- [Tools](#tools)
- [Samples](#samples)
- [Current State](#current-state)
- [Contributing](#contributing)

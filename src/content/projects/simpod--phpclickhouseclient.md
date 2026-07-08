---
repo: "simPod/PhpClickHouseClient"
name: "PhpClickHouseClient"
description: "PHP ClickHouse Client over HTTP"
readmeQualityOk: true
url: "https://github.com/simPod/PhpClickHouseClient"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["clickhouse", "clickhouse-client", "hacktoberfest", "php"]
stars: 19
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2018-10-23T16:20:10Z"
lastCommitAt: "2026-07-08T05:41:53Z"
lastReleaseAt: "2022-01-28T12:53:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 58
maintainers: ["simPod", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1dd653f1defdc712c52a111e0c958873a7ecaea47ea7628360b52cc5ab84f72/simPod/PhpClickHouseClient"
fundingLinks: ["GITHUB:https://github.com/simPod"]
discussionCount: 0
---

# PHP ClickHouse Client

## Motivation

The library is trying not to hide any ClickHouse HTTP interface specific details. 
That said everything is as much transparent as possible and so object-oriented API is provided without inventing own abstractions.  
Naming used here is the same as in ClickHouse docs. 

- Works with any HTTP Client implementation ([PSR-18 compliant](https://www.php-fig.org/psr/psr-18/))
- All [ClickHouse Formats](https://clickhouse.yandex/docs/en/interfaces/formats/) support
- Logging ([PSR-3 compliant](https://www.php-fig.org/psr/psr-3/))
- SQL Factory for [parameters "binding"](#parameters-binding)
- [Native query parameters](#native-query-parameters) support

## Contents

- [Setup](#setup)
  - [Logging](#logging)
  - [PSR Factories who?](#psr-factories-who)
- [Sync API](#sync-api)
  - [Select](#select)
  - [Select With Params](#select-with-params)
  - [Insert](#insert)
- [Async API](#async-api)
  - [Select](#select-1)
- [Native Query Parameters](#native-query-parameters)
- [Snippets](#snippets)

## Setup

```sh
composer require simpod/clickhouse-client  
```

1. Read about ClickHouse [Http Interface](https://clickhouse.com/docs/en/interfaces/http/). _It's…

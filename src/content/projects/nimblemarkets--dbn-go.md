---
repo: "NimbleMarkets/dbn-go"
name: "dbn-go"
description: "Golang bindings and tools for DataBento"
readmeQualityOk: true
url: "https://github.com/NimbleMarkets/dbn-go"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 43
forks: 13
openIssues: 8
closedIssues: 9
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-03-19T18:23:44Z"
lastCommitAt: "2026-11-07T15:52:41Z"
lastReleaseAt: "2025-04-01T17:59:52Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 53
maintainers: ["neomantra", "mfelker", "vbmithr"]
openGraphImageUrl: "https://opengraph.githubassets.com/da0cbffd08e3ea83a8816ebf40401e88bca4ac7f95bd35bf0187ea4f88d7ce92/NimbleMarkets/dbn-go"
---

# dbn-go - Golang bindings to DBN

**Golang tooling for Databento's APIs and DBN format**

This repository contains Golang bindings to [Databento's](https://databento.com) file format [Databento Binary Encoding (DBN)](https://databento.com/docs/knowledge-base/new-users/dbn-encoding), [Historical API](#historical-api), and [Live API](#live-api).  It also includes [tools](https://github.com/NimbleMarkets/dbn-go/blob/HEAD/cmd/README.md) to interact with these services.

 * [Library Usage](#library-usage)
 * [Reading DBN Files](#reading-dbn-files)
 * [Reading JSON Files](#reading-json-files)
 * [Writing DBN Files](#writing-dbn-files)
 * [Historical API](#historical-api)
 * [Live API](#live-api)
 * [Tools](#tools)
   * [Tool Installation](https://github.com/NimbleMarkets/dbn-go/blob/HEAD/cmd/README.md#installation)

**NOTE:** This library is **not** affiliated with Databento.  Please be careful with commands which incur billing.  We are not responsible for any charges you incur.

## Library Usage

To use this library, import the following package, optionally with Databento Historical or Live support:

```go
import (
    dbn "github.com/NimbleMarkets/dbn-go"
    dbn_hist…

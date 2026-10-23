---
repo: "LMCache/LMCache-Ascend"
name: "LMCache-Ascend"
description: "LMCache-Ascend is a plugin for running LMCache on the Ascend NPU."
readmeQualityOk: true
url: "https://github.com/LMCache/LMCache-Ascend"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [70, 28]
stars: 92
forks: 63
openIssues: 30
closedIssues: 91
watchers: 1
contributors: 29
recentReleases: 4
createdAt: "2025-08-04T18:53:18Z"
lastCommitAt: "2026-10-23T08:47:36Z"
lastReleaseAt: "2026-10-15T07:11:54Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 57
maintainers: ["chloroethylene", "marcobarlo", "larksudo"]
openGraphImageUrl: "https://opengraph.githubassets.com/035c9c169f1aee788496d64e794829bd1f8eafbfad82d6aabac33269dc126ddc/LMCache/LMCache-Ascend"
---

LMCache-Ascend Plugin

  

  | <a href="https://www.hiascend.com/en/"><b>About Ascend</b></a>
  | <a href="https://blog.lmcache.ai/"><b> LMCache Blog</b></a> 
  | <a href="https://docs.lmcache.ai/"><b>Documentation</b></a> 
  | <a href="https://join.slack.com/t/lmcacheworkspace/shared_invite/zt-36x1m765z-8FgDA_73vcXtlZ_4XvpE6Q"><b> Slack</b></a>
  | <a href="https://deepwiki.com/LMCache/LMCache-Ascend"><b>LMCache-Ascend Wiki</b></a>

--------------------------------------------------------------------------------

## Overview

LMCache-Ascend is a community maintained plugin for running LMCache on the Ascend NPU.

> **Maintenance notice**: The stable in-process version (`LMCacheAscendConnectorV1Dynamic`) is maintained on the [`dsv4_support_045`](https://github.com/LMCache/LMCache-Ascend/tree/dsv4_support_045) branch and is **tightly coupled with LMCache 0.4.5** — pair it with the LMCache 0.4.5 release line, not newer versions. The `main` branch moves to MP mode (`LMCacheMPConnector`) and will no longer maintain the in-process mode.

## Prerequisites

To use LMCache-Ascend on the NPU hardware, please make sure the following prerequisites are satisfied.

- **Hardware**: Atlas 800I A2…

---
repo: "superdurable/dex-connectors-library"
name: "dex-connectors-library"
description: "A library for dex apps to connect with any products on the internet via public APIs."
readmeQualityOk: true
url: "https://github.com/superdurable/dex-connectors-library"
homepage: "https://connectors.superdurable.io"
language: "Go"
languages: ["Go", "Python", "TypeScript"]
languagePcts: [39, 31, 30]
stars: 5
forks: 4
openIssues: 69
closedIssues: 15
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-18T18:48:13Z"
lastCommitAt: "2026-11-12T05:38:34Z"
lastReleaseAt: "2026-09-24T20:57:32Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 68
maintainers: ["longquanzheng", "zzheng-aiplay"]
openGraphImageUrl: "https://opengraph.githubassets.com/eece8d48e320d8cceee44a3c2b61a9e7af599f5f17211607b36cb038be37cd69/superdurable/dex-connectors-library"
---

# Dex Connectors Library

[Dex main repository](https://github.com/superdurable/dex) ·
[Documentation](https://docs.superdurable.io) ·
[Connector directory](https://connectors.superdurable.io/)

## Overview

Dex Connectors Library is the open-source library that connects Dex
applications to products and services across the internet.

Trigger events from those products can start a new Flow run or invoke a Flow
RPC. On the other hand, Dex Flows compose reusable Connector Steps to call
provider APIs. Those Steps include Query and Mutation operations, timeout and
retry policy, persisting read results in Attributes, and streaming progress
from long-running operations. In addition, connectors include reusable UI
units for configuring and using those products.

The directory lists each published connector, its company, reusable UI units,
triggers, and operations. Search matches all of those names and descriptions.

## Use a connector

A Connector is a versioned integration package, not just an API operation. It
can own authentication and connection configuration, provider reads and
writes, provider event ingress, typed routing into Dex, and reusable setup UI.
Applications keep only a…

---
repo: "FIWARE/data-space-connector"
name: "data-space-connector"
description: "FIWARE Data Space Connector following DSBA TC recommendations"
url: "https://github.com/FIWARE/data-space-connector"
language: "Mustache"
languages: ["Mustache"]
languagePcts: [98]
stars: 51
forks: 15
openIssues: 0
closedIssues: 31
watchers: 9
contributors: 12
recentReleases: 0
createdAt: "2023-09-15T05:25:47Z"
lastCommitAt: "2026-06-25T06:41:56Z"
lastReleaseAt: "2023-09-25T11:42:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["wistefan", "vramperez", "Mortega5"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0f95f618e324dc9d0bc12105922cbabdaa55ad9180e2c9855891e74c4a79241/FIWARE/data-space-connector"
---

# FIWARE Data Space Connector

The FIWARE Data Space Connector (FIWARE DSC) is a data space connector resulting from the integration of open-source
software components that are part of the [FIWARE Dataspace Components (FDC)](https://github.com/FIWARE) and the
[Eclipse Dataspace Components (EDC)](https://eclipse-edc.github.io/docs/). Every organization participating
in a data space can deploy it to "connect" to a data space, acting as data (processing) service provider,
consumer of data (processing) services, or both.

This repository provides a description of the FIWARE Data Space Connector, its technical implementation and deployment
recipes.

<details>
<summary><strong>Table of Contents</strong></summary>

- [Overview](#overview)
- [Release Information](#release-information)
- [Components](#components)
- [Description of modules and interaction flows](#description-of-modules-and-interaction-flows)
  - [OID4VC-based Authentication Framework](#oid4vc-based-authentication-framework)
    - [Wallet compatibility](#wallet-compatibility)
    - [Service invocation (H2M)](#service-invocation-h2m)
    - [Service invocation (M2M)](#service-invocation-m2m)
  - [Authorization…

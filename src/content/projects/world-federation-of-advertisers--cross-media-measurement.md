---
repo: "world-federation-of-advertisers/cross-media-measurement"
name: "cross-media-measurement"
description: "A privacy centric system for cross publisher, cross media ads measurement through secure multiparty computations."
readmeQualityOk: true
url: "https://github.com/world-federation-of-advertisers/cross-media-measurement"
homepage: "https://halo.wfanet.org/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [84]
stars: 51
forks: 23
openIssues: 337
closedIssues: 1113
watchers: 7
contributors: 55
recentReleases: 0
createdAt: "2021-03-19T21:36:49Z"
lastCommitAt: "2026-10-07T10:30:45Z"
lastReleaseAt: "2024-01-26T23:35:47Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "community_hub"]
healthScore: 94
undervaluedScore: 57
maintainers: ["stevenwarejones", "Marco-Premier", "laureanobrs"]
openGraphImageUrl: "https://opengraph.githubassets.com/18b8fe8cefd1bda3bc68567ff15d80412915daf34a8aaebd08360fbc1788c4ae/world-federation-of-advertisers/cross-media-measurement"
discussionCount: 51
---

# WFA Measurement System

**Table of Contents**

*   [Purpose](#purpose)
*   [System Overview](#system-overview)
*   [Repository Structure](#repository-structure)
    *   [Services and Daemons](#servers-and-daemons)
    *   [Common Directories](#common-directories)
*   [Container Images](#container-images)
*   [Developer Guide](#developer-guide)
*   [Documentation](#documentation)
    *   [Dependencies](#dependencies)
*   [Contributing](#contributing)

## Purpose

Implementation of a privacy centric system for cross publisher, cross media ads
measurement through secure multiparty computations.

## System Overview

At a high level the system requires at least three independent deployments, one
controller and two secure multiparty computation nodes, each operating its own
microservices and storage instances. In order to make precise statements about
the system architecture we introduce the following terms.

The *Kingdom* is a single deployment that allows advertisers to configure
reports, requests the data and computations required to generate those reports,
and makes the completed reports accessible to advertisers.

The *Duchies* are at least two separate deployments each operated…

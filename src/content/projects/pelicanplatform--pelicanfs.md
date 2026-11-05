---
repo: "PelicanPlatform/pelicanfs"
name: "pelicanfs"
description: "An fsspec implementation that uses the pelican client"
readmeQualityOk: true
url: "https://github.com/PelicanPlatform/pelicanfs"
homepage: "https://pelicanplatform.org/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["osdf", "pelican"]
stars: 5
forks: 8
openIssues: 30
closedIssues: 45
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2024-02-02T18:58:07Z"
lastCommitAt: "2026-11-05T14:06:18Z"
lastReleaseAt: "2026-01-30T14:53:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 89
maintainers: ["turetske", "henryiii", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65fbe4eade05dfdca5c4d8b6064f40d1a6c04efbcf7aa0260738f07e658abf17/PelicanPlatform/pelicanfs"
discussionCount: 2
---

# PelicanFS

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Limitations](#limitations)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Basic Usage](#basic-usage)
  - [Using the OSDF Scheme](#using-the-osdf-scheme)
- [Object Operations](#object-operations)
  - [Listing Objects and Collections](#listing-objects-and-collections)
  - [Pattern Matching with Glob](#pattern-matching-with-glob)
  - [Reading Objects](#reading-objects)
  - [Writing Objects](#writing-objects)
  - [Downloading Objects](#downloading-objects)
- [Advanced Configuration](#advanced-configuration)
  - [Specifying Endpoints](#specifying-endpoints)
  - [Enabling Direct Reads](#enabling-direct-reads)
  - [Specifying Preferred Caches](#specifying-preferred-caches)
- [Authorization](#authorization)
  - [1. Providing a Token via Headers](#1-providing-a-token-via-headers)
  - [2. Environment Variables](#2-environment-variables)
  - [3. Default Token Location](#3-default-token-location)
  - [4. HTCondor Token Discovery](#4-htcondor-token-discovery)
  - [5. OIDC Device Flow (Interactive)](#5-oidc-device-flow-interactive)
  - [Token File Formats](#token-file-formats)
  -…

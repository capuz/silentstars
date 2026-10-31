---
repo: "cherries-works/pulse"
name: "pulse"
description: "A Linux monitoring dashboard written entirely in C, with a custom HTTP server, metric collection via /proc, and a lightweight web interface."
readmeQualityOk: true
url: "https://github.com/cherries-works/pulse"
homepage: "https://cherries.works/project/pulse"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["c-language", "foss", "linux", "monitoring"]
stars: 36
forks: 8
openIssues: 10
closedIssues: 52
watchers: 0
contributors: 8
recentReleases: 5
createdAt: "2026-06-10T22:37:07Z"
lastCommitAt: "2026-10-31T18:52:46Z"
lastReleaseAt: "2026-10-23T23:19:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 49
maintainers: ["mertishere", "sny1411", "tecnolgd"]
openGraphImageUrl: "https://opengraph.githubassets.com/5225ee2fd29901d7b254e6130af377a3991ed9e4fec564eebd5acf8bfbd15805/cherries-works/pulse"
discussionCount: 2
---

# Pulse

Lightweight Linux system monitoring, written in C.

A fast, simple, and efficient monitoring system that just works.

[Features](#features) · [Install](#installation) · [API](#api) · [Contributing](#contributing)

---

Pulse collects system metrics directly from Linux and exposes them through a minimal web dashboard. The simplicity, such as no accounts, or no setup is not a design flaw, its the goal of Pulse.

It reads everything from `/proc` and `/sys`, so there is nothing to install next to it. The HTTP server is written from scratch, serves a single lightweight page, and consumes little to no RAM.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Running](#running)
4. [API](#api)
5. [Contributing](#contributing)
6. [Philosophy](#philosophy)
7. [Roadmap](#roadmap)
8. [License](#license)

## Features

- CPU usage
- Memory usage
- Disk usage
- Disk I/O statistics
- Network statistics
- Load averages
- Running processes, sortable by CPU and RAM
- Hostname and uptime
- Built-in web dashboard
- Historical metrics with graphs
- JSON API for everything the dashboard shows

## Installation

### Quick

```bash
$ curl -fsSL…

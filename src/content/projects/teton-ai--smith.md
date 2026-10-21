---
repo: "Teton-ai/smith"
name: "smith"
description: "Smith, also known as Agent Smith"
readmeQualityOk: true
url: "https://github.com/Teton-ai/smith"
homepage: "https://smith.teton.ai/docs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 68
forks: 5
openIssues: 11
closedIssues: 31
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2025-04-29T11:20:32Z"
lastCommitAt: "2026-10-21T08:48:44Z"
lastReleaseAt: "2025-05-19T10:04:55Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 51
maintainers: ["teton-bot", "wajntr-a", "Alw3ys"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc60505e561b957dbb5d3a582528ad8a12efb964f41c3bb906416fd6b5cb9f97/Teton-ai/smith"
---

# Smith (Agent Smith) 

**Smith** is an open-source fleet management system built in Rust for managing distributed IoT devices at scale. Born from managing thousands of devices across healthcare facilities, Smith provides the automation and reliability you need to deploy, monitor, and update your fleet with confidence.

## Why Smith?

- **Built for Scale**: Manage everything from hundreds to thousands of devices
- **Reliable**: Designed for >99% uptime in critical environments
- **Seamless Updates**: Deploy upgrades and rollbacks with zero manual intervention
- **Transparent**: Open-source infrastructure you can trust and extend

## Architecture

Smith consists of five main components:

- **smithd**: Daemon that runs on each device to execute deployments and report status
- **updater**: Daemon that keeps smithd up to date
- **api**: Backend service managing deployment configurations and fleet status
- **dashboard**: Visual interface to monitor your fleet in real-time
- **cli (sm)**: Command-line tool for fleet administrators

## Getting Started

Read the [documentation](https://github.com/Teton-ai/smith/blob/HEAD/dashboard/docs/introduction.md) to get started with Smith. The…

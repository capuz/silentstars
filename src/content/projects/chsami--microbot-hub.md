---
repo: "chsami/Microbot-Hub"
name: "Microbot-Hub"
description: "Create your Microbot Plugins in the Microbot Hub"
readmeQualityOk: true
url: "https://github.com/chsami/Microbot-Hub"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 22
forks: 194
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 71
recentReleases: 0
createdAt: "2025-07-29T18:59:57Z"
lastCommitAt: "2026-10-25T02:47:46Z"
lastReleaseAt: "2025-08-19T05:47:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 76
maintainers: ["chsami", "JogOnJohn", "JThomasDevs"]
openGraphImageUrl: "https://opengraph.githubassets.com/be2665d07453b11ff3ad3144a664c15d73b027d60473de7b963751b218199b0c/chsami/Microbot-Hub"
discussionCount: 2
---

___

# Microbot Hub

Welcome to the Microbot Hub.

The hub is the dedicated place for community created plugins and scripts. It exists to keep the main Microbot client focused on core features while giving contributors a simple way to build, test, and share new ideas. This separation keeps the client lean, fast, and stable. The hub can evolve quickly without risking the reliability of the core application.

## What you will find here

1. Community plugins that extend Microbot
2. A light process to build and test plugins
3. A simple structure that is easy to maintain

## Requirements

1. Java Development Kit that matches the Microbot client version you use
2. Gradle installed or the Gradle wrapper from the repository
3. Git for version control

By default the build calls `https://microbot.cloud/api/version/client` to fetch the latest client version, falling back to `2.6.9` if the lookup fails. Override with `-PmicrobotClientVersion=<version>` or `-PmicrobotClientVersion=latest`. If you need to work offline, point to a downloaded client JAR with `-PmicrobotClientPath=/absolute/path/to/microbot-<version>.jar`.

Plugin download URLs in `plugins.json` now point at the stable GitHub…

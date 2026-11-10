---
repo: "Extra-Chill/data-machine"
name: "data-machine"
description: "Agentic operating system for WordPress."
readmeQualityOk: true
url: "https://github.com/Extra-Chill/data-machine"
homepage: "https://chubes.net/docs/data-machine"
language: "PHP"
languages: ["PHP"]
languagePcts: [85]
topics: ["wordpress-plugin", "action-scheduler", "abilities-api", "ai-agents", "wp-cli"]
stars: 40
forks: 7
openIssues: 224
closedIssues: 1620
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-05T05:57:23Z"
lastCommitAt: "2026-11-10T11:37:16Z"
lastReleaseAt: "2026-04-28T00:59:10Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 59
maintainers: ["chubes4", "homeboy-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8496d0cb717557455cd586efaa5c651a8b3c437a6dce3b6f002e941a9b13a258/Extra-Chill/data-machine"
---

# Data Machine

**Data Machine turns a WordPress site into a place where AI agents do real work.** Agents get a persistent identity and memory, pipelines that fetch, process and publish content, typed abilities they can call, and human approval for anything risky. All of it is native WordPress: plugins, the Abilities API, REST, WP-CLI and wp-admin.

Data Machine runs [Extra Chill](https://extrachill.com), an independent music platform, in production. Its agents import shows from venue sites into an events calendar, publish to social accounts, report on analytics and search, write daily memory, and handle the operational busywork across an 11-site network. The generic agent runtime underneath it, [Agents API](https://github.com/Automattic/agents-api), started inside Data Machine and was extracted so any WordPress plugin can build on it.

Click the badge above to try core in your browser. Nothing is installed, and nothing persists after you close the tab.

## What's in this repository

One core plugin and three extensions built on it. Each is a separate WordPress plugin with its own version, releases and activation, so a site installs only what it needs.

| Plugin | What it adds |…

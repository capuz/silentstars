---
repo: "devture/nagadmin"
name: "nagadmin"
description: "Web-configurator and frontend for Nagios"
readmeQualityOk: true
url: "https://github.com/devture/nagadmin"
language: "PHP"
languages: ["PHP"]
languagePcts: [65]
topics: ["nagios"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2013-12-31T13:59:45Z"
lastCommitAt: "2026-11-21T11:31:32Z"
lastReleaseAt: "2026-10-21T10:03:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 60
maintainers: ["renovate[bot]", "artidezi-etke-cc[bot]", "spantaleev"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8bb5ca966a72291580ac5d2874bc33b6d8fa4aa16cfb57d8e6a350422b6c49c/devture/nagadmin"
---

Editing Nagios `.cfg` files by hand is tedious, needs terminal access, and gives you no real overview of what's
configured. **Nagadmin** replaces that with a friendly, mobile-friendly web interface — and, unlike most
configurators, it doesn't expect you to bring your own Nagios. The Nagios engine is **bundled and managed for you**,
so a single command brings up a complete, self-hosted monitoring system.

It deliberately **optimizes for the common monitoring use-case** rather than supporting every esoteric Nagios
feature. That keeps the workflow simple — but if your needs are very advanced, you may prefer another solution or a
fork. See [🚧 Limitations](#-limitations).

## 🧩 One stack, batteries included

Nagadmin isn't a configurator that talks to a Nagios you have to install and babysit yourself — **it ships Nagios
too**. A single `just run` brings the whole monitoring stack up in containers:

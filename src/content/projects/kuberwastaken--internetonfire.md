---
repo: "Kuberwastaken/internetonfire"
name: "internetonfire"
description: "The internet is on fire. A central, community-maintained tracker of cybersecurity and AI incidents - sourced, timestamped, and open to contributions."
readmeQualityOk: true
url: "https://github.com/Kuberwastaken/internetonfire"
homepage: "http://kuber.studio/internetonfire/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [71]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T07:53:49Z"
lastCommitAt: "2026-11-06T12:18:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["Kuberwastaken"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c72c28b3696c4fe57477d4836a8369404d178964320d7bf15e227df8b362a06/Kuberwastaken/internetonfire"
---

# internetonfire

**The internet is on fire. This is fine.**

A running log of security incidents: breaches, backdoored packages, exploited bugs. Every entry links to its source and carries an evidence label. An AI agent does the triage; anyone can correct it with a PR.

[kuber.studio/internetonfire](https://kuber.studio/internetonfire/) · [Report an incident](https://github.com/Kuberwastaken/internetonfire/issues/new?template=incident.yml) · [Open PRs](https://github.com/Kuberwastaken/internetonfire/pulls) · [Contributing](https://github.com/Kuberwastaken/internetonfire/blob/HEAD/CONTRIBUTING.md)

## Evidence labels

| | |
|---|---|
| **Confirmed** | A primary source (vendor advisory, researcher write-up) backs the description. |
| **Reported** | Credible reporting, no primary confirmation yet. |
| **Disputed** | Sources disagree. Both sides are linked. |
| **Unverified** | A claim going around. Not an established incident. |

Every entry has a copy button that gives a share link (`kuber.studio/internetonfire/i/<id>/`) with its own preview card, e.g. "Node.js is on fire." It opens the entry on the main page. The cards are rendered at build time from `tools/og/card.html`.

Entries…

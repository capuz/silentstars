---
repo: "GETAccretion/getaccretion.github.io"
name: "getaccretion.github.io"
description: "AltSource package repository"
readmeQualityOk: true
url: "https://github.com/GETAccretion/getaccretion.github.io"
homepage: "https://getaccretion.github.io/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [45, 26]
stars: 7
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-10T05:29:42Z"
lastCommitAt: "2026-10-17T07:58:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["BenwillLopez", "github-actions[bot]", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/6659547f8dcaa12e780410648a1fc029a4144a34680f23aa08417fa710cd8559/GETAccretion/getaccretion.github.io"
discussionCount: 1
---

In space, *accretion* is how gravity pulls scattered matter into a single body. **Accretion** does
the same for apps. It is an app source in the standard **AltStore JSON format** that pulls over a
hundred public AltStore and SideStore sources into one link. Each app appears once, at its **newest
version**. It is rebuilt every 6 hours, and broken entries and dead download links are removed
automatically.

## Browse the store

**[getaccretion.app](https://getaccretion.app/)**: search every app, filter by
category, see versions, sizes and what's new, and download or open apps in AltStore or SideStore. It is
rebuilt with the source every 6 hours. Downloading needs a free account: the website and the
Accretion app show the download and install buttons once you sign in. For third-party apps this is
only a gate in the store; their files stay at their sources and are never copied.

The store loads its catalogue from `data/store.json`, built by [`scripts/site.py`](https://github.com/GETAccretion/getaccretion.github.io/blob/HEAD/scripts/site.py).
[`site/app-config.json`](https://github.com/GETAccretion/getaccretion.github.io/blob/HEAD/site/app-config.json) sets `minimumVersion`, the oldest…

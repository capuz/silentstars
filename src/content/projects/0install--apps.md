---
repo: "0install/apps"
name: "apps"
description: "0install feeds/packages for common apps and libraries"
readmeQualityOk: true
url: "https://github.com/0install/apps"
homepage: "https://apps.0install.net"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 56
forks: 13
openIssues: 7
closedIssues: 17
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2019-12-21T16:18:23Z"
lastCommitAt: "2026-10-12T11:15:12Z"
lastReleaseAt: "2019-12-21T17:19:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 54
maintainers: ["github-actions[bot]", "bastianeicher", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d8d4977c6bfbf91f081978d679691aa804a2479a11af155df13636cfc806871/0install/apps"
---

# apps.0install.net

https://apps.0install.net/ provides [Zero Install](http://0install.net/) feeds for apps where the upstream authors do not provide feeds of their own. It also serves as a repository for basic infrastructure components such as libraries and runtime environments.

## Adding new apps

If you wish to see a new app, tool or library added to this repository let us know by [creating a GitHub issue](https://github.com/0install/apps/issues/new) or even better by creating a pull request with [a feed you created](https://docs.0install.net/packaging/).

## Automatic updates

The feeds in this repository are updated using the following tools:

[0watch](https://github.com/0install/0watch) scrapes upstream websites to discover new versions of applications. It runs a watch file (e.g., `ffmpeg.watch.py`) and then automatically calls 0template as needed.

[0template](https://github.com/0install/0template) is used to add new releases of applications. It takes a template (e.g., `ffmpeg.xml.template`) and values for placeholders (e.g., a version number) as input and generates a new feed (e.g., `ffmpeg-2.0.0.xml`) as output.

[0repo](https://github.com/0install/0repo) merges feeds…

---
repo: "cyberducttape/StePanel"
name: "StePanel"
description: "Open-source Linux hosting control panel in Go. Manage PHP sites, databases, SSL and backups, with safer cPanel migrations."
readmeQualityOk: true
url: "https://github.com/cyberducttape/StePanel"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["apache", "cpanel-migration", "cpmove", "golang", "hosting-panel", "lamp-stack", "mariadb", "caddy", "caddy-server", "openlitespeed"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-22T23:24:44Z"
lastCommitAt: "2026-11-07T22:51:03Z"
lastReleaseAt: "2026-09-22T03:18:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["cyberducttape", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14032bcbc81f6bd10ac2e67f2af32a3a578db43d30d48a35953dcf3b13cee074/cyberducttape/StePanel"
discussionCount: 1
---

# StePanel

> Current stable release: [`v0.7.0`](https://github.com/cyberducttape/StePanel/releases/tag/v0.7.0).
> See [ROADMAP.md](https://github.com/cyberducttape/StePanel/blob/HEAD/docs/ROADMAP.md) for next version planning.

  

> A safety-first Linux web and application hosting control plane with cPanel migration tooling.

StePanel is an open-source server management panel written in Go. It installs Caddy by default, with Apache and OpenLiteSpeed available explicitly, plus PHP and a selectable MySQL, MariaDB, or PostgreSQL version. It provides a focused operations dashboard and imports cPanel `cpmove` backups through an asynchronous, validated workflow.

It is designed for people who want a small, understandable hosting control plane instead of a large opaque platform.

The preview images use StePanel's dark appearance and CyberDuctTape demo
branding. These are screenshots of the real UI, captured with synthetic data by
[`scripts/capture-screenshots.sh`](https://github.com/cyberducttape/StePanel/blob/HEAD/scripts/capture-screenshots.sh). See
[SCREENSHOTS.md](https://github.com/cyberducttape/StePanel/blob/HEAD/docs/SCREENSHOTS.md) for every view and how they are produced.

##…

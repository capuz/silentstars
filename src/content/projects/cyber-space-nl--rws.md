---
repo: "Cyber-Space-nl/RWS"
name: "RWS"
description: "RWS - Rust Webserver"
readmeQualityOk: true
url: "https://github.com/Cyber-Space-nl/RWS"
homepage: "https://rws.cyber-space.nl/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-11-12T12:26:51Z"
lastCommitAt: "2026-11-17T12:18:41Z"
lastReleaseAt: "2026-11-16T17:23:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Cyber-Space-nl"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a8d3ab0aa13e19ae13db6fa9b5216bc1af8aa4cd8f999df01fb58acc2fedce8/Cyber-Space-nl/RWS"
---

# Rust WebServer (RWS)

RWS is an experimental event-driven Linux web server written in Rust. It serves static files and
PHP-FPM applications, provides a native WebSocket echo endpoint, and offers an optional HTTP
reverse proxy. It is an MVP for testing and measurement, not yet a drop-in replacement for Nginx
or Apache.

**One server build:** `rws` combines static files, PHP-FPM and WebSocket echo with optional
reverse proxying and adaptive WebSocket scheduling. Configure the features you need in one
configuration file; `rws-bench` and `rws-ws-load` are separate testing tools, not server variants.

The [v0.1.0-beta.8 prerelease](https://github.com/Cyber-Space-nl/RWS/releases/tag/v0.1.0-beta.8)
provides experimental Linux x86-64 binaries and release notes. Visit
[rws.cyber-space.nl](https://rws.cyber-space.nl/) for the project overview and benchmark reports.

Beta.3 introduces the single `rws` server binary. The older beta.2 release contains separate
server variants; existing installations require a manual migration and a tested rollback plan.

## Running on RWS

[insaider.nl](https://insaider.nl/) has been running on RWS since 16 November 2026, using native
HTTPS, static-file…

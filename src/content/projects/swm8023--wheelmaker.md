---
repo: "swm8023/WheelMaker"
name: "WheelMaker"
description: "WheelMaker – A Go library that turns your phone into a remote AI coding assistant. Stop reinventing the wheel, start making your own. 🛞"
readmeQualityOk: true
url: "https://github.com/swm8023/WheelMaker"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [51, 38]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-03-14T02:09:40Z"
lastCommitAt: "2026-07-16T05:59:50Z"
lastReleaseAt: "2026-06-01T16:07:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["teezoop"]
openGraphImageUrl: "https://opengraph.githubassets.com/446ea727f7580135f8c31dcf6059e6677f2127744158529ad7e6d45ae6acdd44/swm8023/WheelMaker"
---

# WheelMaker

WheelMaker is a self-hosted daemon that lets you use AI coding workflows against your local repositories from a phone or a browser.

> Workspace Web UI / App -> WheelMaker -> Claude / Codex / Copilot -> your codebase

The supported trust and deployment boundaries are documented in [WheelMaker security model](https://github.com/swm8023/WheelMaker/blob/HEAD/docs/security.md); review the [known risks and deferred items](https://github.com/swm8023/WheelMaker/blob/HEAD/docs/security-known-risks.md) before exposing a Registry.

## Usage

### Deployment model

This README uses the current two-machine shape discussed for this repository:

- **Machine A**
  - runs one hub
  - hosts the registry service
  - publishes the Web UI
  - exposes a single HTTPS entrypoint through Nginx
- **Machine B**
  - runs another hub
  - reports its projects to Machine A through the registry
- **Clients**
  - browsers and phones connect to Machine A over HTTPS / WSS

This model works well when you want one machine to expose the public entrypoint while other machines only contribute projects and agents.

### Topology

### Entrypoints and ports

| Location | Endpoint | Purpose |
| --- | --- | ---…

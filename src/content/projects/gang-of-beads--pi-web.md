---
repo: "Gang-of-Beads/pi-web"
name: "pi-web"
description: "Web UI for Pi Coding Agent that keeps sessions alive in real workspaces."
readmeQualityOk: true
url: "https://github.com/Gang-of-Beads/pi-web"
homepage: "https://github.com/Gang-of-Beads/pi-web"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 10
createdAt: "2026-08-31T10:18:21Z"
lastCommitAt: "2026-09-20T08:47:10Z"
lastReleaseAt: "2026-09-03T15:01:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["VincentHanxiaoDu"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbd08fb6b8a596e0a30926b4f0d621007d22f1fc89ac730e61e28fe9b7995282/Gang-of-Beads/pi-web"
---

# PI WEB

**PI WEB is a web UI for [Pi Coding Agent](https://github.com/earendil-works/pi/tree/main/packages/coding-agent) that keeps agent sessions running in real workspaces on your machine or server.**

Run agents where your code, tools, credentials, and build caches live. Supervise them from any browser.

Source and docs: <https://github.com/Gang-of-Beads/pi-web>

## Why PI WEB?

Agentic development works better when the work environment is persistent.

PI WEB lets you:

- keep Pi Coding Agent sessions alive after browser disconnects;
- run agents inside real repositories and git worktrees;
- supervise multiple sessions in parallel;
- switch between laptop, phone, tablet, and desktop;
- use a server, workstation, or remote dev box as your agent runtime;
- manage projects, workspaces, files, terminals, sessions, and remote machines from one web UI.

Your browser is the control surface. The work stays where it can keep running.

## Quick start

Requirements:

- Node.js 22.19.0 or newer
- npm
- Pi Coding Agent `>=0.84.0`, configured for your user
- git and the development tools your agents need

Install and start PI WEB as per-user services:

```bash
npm install -g…

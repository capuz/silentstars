---
repo: "matthewprince/qobuzify"
name: "qobuzify"
description: "Spicetify, but for Qobuz. Theme and extend the Qobuz desktop app: live themes, a full-page search, synced lyrics, listening stats, and 18 extensions."
readmeQualityOk: true
url: "https://github.com/matthewprince/qobuzify"
homepage: "https://qobuzify.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 12
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-04T16:25:13Z"
lastCommitAt: "2026-07-22T06:10:23Z"
lastReleaseAt: "2026-07-17T04:24:42Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 43
maintainers: ["matthewprince", "inivous"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b5c7aee967838fc5bb2840a3d750637af5c12e60bb983bf95a1b37d0d1bd38c/matthewprince/qobuzify"
---

# Qobuzify

**Spicetify, but for Qobuz.** Theme and extend the Qobuz desktop app.

Qobuz ships as unpacked Electron with a wide-open CSP, so Qobuzify injects one inline `<script>` into `app.html` and works from inside the running app: a live theme engine, a Marketplace and Qobuzify menu in the account dropdown, and an extension loader. It's fully reversible, and it's zero-dependency Node.

## Install

```
git clone <repo> && cd qobuzify
npm link                 # or: node bin/qobuzify.js <command>
qobuzify install         # inject the runtime + Marketplace, relaunch Qobuz
```

Open Qobuz, click your avatar, and pick **Marketplace** to switch themes live and toggle extensions. Needs Node 16+ and the Qobuz desktop app. Windows only (macOS planned; Qobuz has no Linux desktop app).

## What you get

- **10 themes**, switchable live from the Marketplace, from a plain accent swap to full frosted-glass restyles.
- **18 extensions**, on by default and individually toggleable, including a full-page ranked search, a personalized For You home, synced word-by-word lyrics, Smart Radio, listening stats, playlist tools, bulk actions, a fullscreen now-playing view, seek and A-B loop controls, a…

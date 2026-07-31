---
repo: "new-usemame/Calibre-Web-NextGen"
name: "Calibre-Web-NextGen"
description: "Community continuation of Calibre-Web-Automated. Attempting to maintain with rapid iteration. Please feel free to help out by filing Issues, Feature Requests, PRs, and chatting in our Discussion."
readmeQualityOk: true
url: "https://github.com/new-usemame/Calibre-Web-NextGen"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [45, 31]
topics: ["calibre", "calibre-plugin", "calibre-server", "calibre-web", "calibre-web-automated", "calibreweb"]
stars: 161
forks: 36
openIssues: 187
closedIssues: 285
watchers: 3
contributors: 124
recentReleases: 10
createdAt: "2026-05-02T03:14:55Z"
lastCommitAt: "2026-07-31T06:30:54Z"
lastReleaseAt: "2026-05-04T21:40:23Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 32
maintainers: ["new-usemame", "chloeroform", "monimkxl-web"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f9e9b7c5b6bc07f95a32f605639a5db807152dbd1cfc07ac6204949e6d02c99/new-usemame/Calibre-Web-NextGen"
fundingLinks: ["GITHUB:https://github.com/new-usemame", "KO_FI:https://ko-fi.com/calibrewebnextgen"]
discussionCount: 10
---

</p>

---

## Switch from upstream CWA

```diff
- image: crocodilestick/calibre-web-automated:latest
+ image: ghcr.io/new-usemame/calibre-web-nextgen:latest
```

```bash
docker compose pull && docker compose up -d
```

Library, settings, users, OAuth tokens, and KOReader sync state are preserved. Switching back is the reverse one-line change.

> **Not using a terminal?** If you run Docker through a NAS or a GUI, follow a step-by-step guide instead — they cover both a fresh install and switching from CWA, with the exact buttons for your platform: **[Synology](https://github.com/new-usemame/Calibre-Web-NextGen/blob/HEAD/docs/install/synology.md) · [Unraid](https://github.com/new-usemame/Calibre-Web-NextGen/blob/HEAD/docs/install/unraid.md) · [Portainer](https://github.com/new-usemame/Calibre-Web-NextGen/blob/HEAD/docs/install/portainer.md) · [TrueNAS SCALE](https://github.com/new-usemame/Calibre-Web-NextGen/blob/HEAD/docs/install/truenas.md) · [all guides](https://github.com/new-usemame/Calibre-Web-NextGen/blob/HEAD/docs/install/)**. Configuration not matching? [Open an issue](https://github.com/new-usemame/Calibre-Web-NextGen/issues) or [ask on…

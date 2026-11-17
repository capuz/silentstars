---
repo: "posit-dev/vip"
name: "vip"
description: "extensible test suite for verifying installations of posit team"
readmeQualityOk: true
url: "https://github.com/posit-dev/vip"
homepage: "https://posit-dev.github.io/vip/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 8
forks: 1
openIssues: 31
closedIssues: 241
watchers: 1
contributors: 27
recentReleases: 0
createdAt: "2026-02-03T17:06:20Z"
lastCommitAt: "2026-11-17T14:47:49Z"
lastReleaseAt: "2026-03-13T20:18:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 67
maintainers: ["ian-flores", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/412f36ff448abd21b16154a3df010af8b9bc27017aa7f19b2a7a30ac3278fe9f/posit-dev/vip"
---

# VIP - Verified Installation of Posit

An open-source, extensible test suite that validates Posit Team deployments are
installed correctly and functioning properly.

VIP uses BDD-style tests (pytest-bdd + Playwright) to verify Connect,
Workbench, and Package Manager deployments. Results can be viewed
from the command-line output or compiled into an HTML report.

**Documentation:** https://posit-dev.github.io/vip/

## Quick start

```bash
uv tool install posit-vip
vip install
vip verify --connect-url https://connect.example.com --interactive-auth
```

Run VIP from your own workstation or a CI runner, not the Connect, Workbench,
or Package Manager servers themselves: VIP checks the deployment the way a
real client would (over the same URL, proxy, and TLS termination your users
go through), and `--interactive-auth` opens a visible browser window that
those servers typically don't have a display for. On a headless server, use
`--headless-auth` or `--api-auth` instead (see below).

### Reproducible install

`uv tool install posit-vip` resolves the newest versions each release allows. To
install the exact set a release was tested against, pass that release's
constraints file (attached…

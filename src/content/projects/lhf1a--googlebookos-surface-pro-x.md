---
repo: "lhf1a/googlebookos_surface_pro_x"
name: "googlebookos_surface_pro_x"
description: "Run Googlebook OS on Surface pro X(Qcom SQ1 SQ2)"
readmeQualityOk: true
url: "https://github.com/lhf1a/googlebookos_surface_pro_x"
language: "Python"
languages: ["Python", "C"]
languagePcts: [47, 24]
topics: ["android", "el2", "googlebookos", "surface", "woa", "linux", "linux-kernel"]
stars: 6
forks: 0
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-10-27T08:43:47Z"
lastCommitAt: "2026-11-21T13:31:41Z"
lastReleaseAt: "2026-11-20T13:40:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 46
maintainers: ["lhf1a", "kanoyami"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dcca5d7b655aab581171f8777246a3b757532d943f8d7d79fa23e5443d4ddf3/lhf1a/googlebookos_surface_pro_x"
---

Android 17 + Linux 6.18.60 hybrid port for Microsoft Surface Pro X SQ1 / SQ2

    &nbsp;·&nbsp; <a href="#overview-and-architecture">Overview</a>
    &nbsp;·&nbsp; <a href="#device-compatibility-and-feature-matrix">Status</a>
    &nbsp;·&nbsp; <a href="#performance-benchmarks">Benchmarks</a>
    &nbsp;·&nbsp; <a href="#real-device-deployment-guide">Install</a>
    &nbsp;·&nbsp; <a href="#debugging-and-development">Debug</a>
    &nbsp;·&nbsp; <a href="#building-from-source">Build</a>
    &nbsp;·&nbsp; <a href="#documentation-index">Docs</a>

---

## Overview and Architecture

**Googlebook OS on Surface Pro X** is an ARM64 port of Android 17 desktop Googlebook OS based on `mica 16471258` and Linux `6.18.60` for Microsoft Surface Pro X SQ1 and SQ2.

The project maintains a single unified image shared across SQ1 and SQ2:

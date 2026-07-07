---
repo: "AlverezYari/phillips-homelab"
name: "phillips-homelab"
description: "Repo for tracking my home lab development"
readmeQualityOk: true
url: "https://github.com/AlverezYari/phillips-homelab"
language: "Shell"
languages: ["Shell", "KCL", "Python"]
languagePcts: [48, 25, 23]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-03-22T16:36:20Z"
lastCommitAt: "2026-07-07T06:37:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 61
maintainers: ["AlverezYari"]
openGraphImageUrl: "https://opengraph.githubassets.com/55dea4cfad193b83a4bf94ab1a6bfb047db248a7529164172209a71724446fdf/AlverezYari/phillips-homelab"
---

<h1 align="center" style="margin-top: 0px;">Phillips Homelab</h1>

</p>

## Intro & Overview

Welcome to my Homelab 2026 project repo! I decided to put this together to practice working with Kubernetes and specifically Talos Linux, while not breaking the bank using one of the public clouds. Additionally, I'm currently working in the gaming space, where self-hosting, especially at the fleet scale is always a challenge. I wanted to build a homelab that would allow me to test out some of the latest and greatest tools in the Kubernetes ecosystem, while also being able to run my own game servers, and other workloads.

**Latest Update (May 2026):** Stood up a self-hosted **Forgejo** instance at `code.phillips-homelab.net` — a hedge against GitHub flakiness as coding-agent activity has been hammering it through 2026. 32 of my GitHub repos are now mirrored locally on a 1-hour sync interval, with HTTPS and SSH clone both working over LAN/Tailnet. Backed by a CloudNativePG Postgres cluster with daily Barman→Garage backups. Also a chunky Synology cleanup pass (24 orphan iSCSI LUNs removed, ~2.6 TB reclaimed) and pulled the Synology CSI install out of cluster drift into proper gitops…

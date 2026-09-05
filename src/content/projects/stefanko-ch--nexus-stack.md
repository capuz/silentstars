---
repo: "stefanko-ch/Nexus-Stack"
name: "Nexus-Stack"
description: "One-command deployment: Hetzner + Cloudflare Zero Trust + Docker"
readmeQualityOk: true
url: "https://github.com/stefanko-ch/Nexus-Stack"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["cloudflare", "docker", "hetzner", "infrastructure-as-code", "self-hosted"]
stars: 27
forks: 2
openIssues: 147
closedIssues: 171
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-08T15:55:59Z"
lastCommitAt: "2026-09-05T07:48:39Z"
lastReleaseAt: "2026-01-28T06:29:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 42
maintainers: ["stefanko-ch", "github-actions[bot]", "rlei-odes"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e2935231a438b30aba565e1228be058bd13d9a2b3665883253fea961255b487/stefanko-ch/Nexus-Stack"
fundingLinks: ["GITHUB:https://github.com/stefanko-ch", "KO_FI:https://ko-fi.com/stefanko_ch", "BUY_ME_A_COFFEE:https://buymeacoffee.com/stefan.koch"]
---

# Nexus-Stack

🚀 **One-command deployment: Hetzner server + Cloudflare Tunnel + Docker - fully automated via GitHub Actions.**

> ⚠️ **Disclaimer:** This project is currently under active development. Use at your own risk. While care has been taken to ensure security, you are responsible for reviewing the code and understanding what it does before running it.

> 📋 **Deployment Method:** This project uses **GitHub Actions exclusively**. Local deployment is not supported as it bypasses the Control Plane architecture.

## What This Does

Nexus-Stack deploys a full self-hosted data and developer stack — 80+ Docker
services on a single Hetzner server — behind Cloudflare Zero Trust, with no
inbound ports open and no local tooling required. Tear it down at night, spin it
back up in the morning, keep the data.

> **New here?** [**What is Nexus Stack?**](https://github.com/stefanko-ch/Nexus-Stack/blob/HEAD/docs/concepts/index.md) is the
> explanation: the problem it solves, [how the pieces fit](https://github.com/stefanko-ch/Nexus-Stack/blob/HEAD/docs/concepts/architecture.md),
> [what survives a teardown](https://github.com/stefanko-ch/Nexus-Stack/blob/HEAD/docs/concepts/lifecycle.md),…

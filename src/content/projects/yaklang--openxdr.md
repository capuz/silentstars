---
repo: "yaklang/OpenXDR"
name: "OpenXDR"
description: "AI Native Frontier XDR System"
originalDescription: "AI Native Frontier XDR System"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yaklang/OpenXDR"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 20]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-07T12:42:42Z"
lastCommitAt: "2026-10-26T21:00:18Z"
lastReleaseAt: "2026-10-20T14:41:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["ZacharyZcR"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c95d29e51394458c8c60557ffceef13ce81ad0a50bbbabf97609956f3b982da/yaklang/OpenXDR"
---

# OpenXDR

Chinese | [English](https://github.com/yaklang/OpenXDR/blob/HEAD/README.en.md)

Open-source XDR platform: EDR + SIEM + full-traffic analysis, with AI-driven noise reduction and operations.

**Managing a host is operating it; managing a host is securing it.** Install an agent on a host and put it in a group, and it automatically gets continuous collection, detection, daily inspections, and a conversational AI assistant. People make the decisions and no longer dig through alert lists.

**Noise stops here; what remains is worth a look.**

## What it can do

- **Onboard a host with one command**: The console issues onboarding tokens per group. One command installs the agent on Linux (x86_64 / arm64) or Windows. The host generates its private key locally, and the server issues a host-binding certificate. Afterward, drop a new build into the distribution directory and online agents upgrade automatically, without logging into the hosts again. Existing operations documents can be imported directly. Credentials are stored encrypted, and SSH management is authorized per group.
- **Collection that works in any environment**: processes, files, persistence points, login and security…

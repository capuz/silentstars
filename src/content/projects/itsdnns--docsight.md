---
repo: "itsDNNS/docsight"
name: "docsight"
description: "Self-hosted DOCSIS evidence system for proving cable signal problems and bad ISP performance. Tracks incidents, signal health, and complaint-ready exports."
readmeQualityOk: true
url: "https://github.com/itsDNNS/docsight"
homepage: "https://itsdnns.github.io/docsight/"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["cable-modem", "docker", "docsis", "fritzbox", "home-assistant", "monitoring", "mqtt", "flask", "homelab", "internet-monitoring"]
stars: 255
forks: 19
openIssues: 1
closedIssues: 286
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-02-09T09:32:02Z"
lastCommitAt: "2026-07-09T20:44:34Z"
lastReleaseAt: "2026-02-12T10:55:57Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 29
maintainers: ["itsDNNS", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1153423690/95fb07e7-c957-4ef3-84f1-0f6c1c555b5c"
fundingLinks: ["GITHUB:https://github.com/itsDNNS", "KO_FI:https://ko-fi.com/itsdnns", "CUSTOM:https://paypal.me/itsDNNS"]
discussionCount: 18
---

</p>

<h1 align="center">DOCSight</h1>

</p>

</p>

  <strong>Your ISP says everything is fine. DOCSight shows the timeline.</strong>
</p>

  Track signal issues, slowdowns, packet loss, and modem events locally so bad evenings do not disappear into "looks fine from here".
</p>

  <strong>Self-hosted</strong> • <strong>Local data</strong> • <strong>Demo</strong> • <strong>Reports</strong> • <strong>18 modem families</strong> • <strong>MIT</strong>
</p>

</p>

  <em>Synthetic demo data in the real product UI: signal health, speed, latency, and connection context in one dashboard.</em>
</p>

---

## Get Started

Start with the fastest path for your setup. On Windows 10/11, use the [Windows quick start](https://github.com/itsDNNS/docsight/blob/HEAD/docs/windows-quick-start.md) for Docker Desktop checks, a PowerShell-safe command, and common startup fixes.

### Option 1: Try the demo

No router required. Demo mode generates 9 months of realistic DOCSIS data so you can explore the workflow immediately.

```bash
docker run -d --name docsight-demo -p 8765:8765 -e DEMO_MODE=true ghcr.io/itsdnns/docsight:latest
```

### Option 2: Connect your own modem or router

```bash
docker run -d…

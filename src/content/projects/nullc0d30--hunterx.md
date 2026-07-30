---
repo: "nullc0d30/HunterX"
name: "HunterX"
description: "A safe-by-design, reasoning-driven Swiss-Knife for professional Red Team Government level vulnerability verification"
readmeQualityOk: true
url: "https://github.com/nullc0d30/HunterX"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 1
recentReleases: 1
createdAt: "2026-02-02T22:43:19Z"
lastCommitAt: "2026-07-30T06:06:00Z"
lastReleaseAt: "2026-07-22T10:53:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["nullc0d30"]
openGraphImageUrl: "https://opengraph.githubassets.com/68c5eb932676f835e9622a76e486294ead6627b03661350fa61c01d4329886a9/nullc0d30/HunterX"
discussionCount: 1
---

# ⚔️ HunterX

**AI-Assisted Offensive Security Framework — Observe · Hypothesize · Probe · Verify**

HunterX is an AI-assisted offensive security framework that combines intelligent reconnaissance, adaptive vulnerability discovery, payload orchestration, and explainable security reasoning into a single modular platform.

```bash
# One-shot scan
hunterx target.com

# AI-assisted full scan
hunterx scan https://target.com --ai --ai-model llama3.2

# List modules, run diagnostics, view reports
hunterx module list
hunterx doctor
hunterx report

# Start the REST API server
hunterx api --port 8443
```

[Install](#installation) ·
[Why HunterX?](#why-hunterx) ·
[Quick Start](#quick-start) ·
[CLI Reference](#cli-reference) ·
[Comparison](#comparison) ·
[Documentation](https://nullc0d30.github.io/HunterX) ·
[Contributing](#contributing)

</div>

---

## Why HunterX?

Traditional vulnerability scanners rely on brute-force payload matching against known signatures. HunterX approaches security assessment differently — it reasons about what vulnerabilities *might* exist before probing, then verifies with evidence.

**Who should use HunterX?**

Red team operators, penetration testers, bug bounty…

---
repo: "HiQS-Labs/XYZ-forge"
name: "XYZ-forge"
description: "XYZ Forge is a local-first engineering operations system. It coordinates several AI coding agents — Claude Code, Codex, agy (Google's Antigravity CLI), and others — working on the same repositories, and it carries the surrounding machinery an unattended agent run actually needs: specified work, collision-free lanes, verification gates, and receipts"
readmeQualityOk: true
url: "https://github.com/HiQS-Labs/XYZ-forge"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [52, 36]
stars: 5
forks: 4
openIssues: 303
closedIssues: 537
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-08-15T22:35:08Z"
lastCommitAt: "2026-11-08T10:38:11Z"
lastReleaseAt: "2026-09-25T21:37:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 66
maintainers: ["noelsaw1"]
openGraphImageUrl: "https://opengraph.githubassets.com/42fb757a284cba938fe1294801fa2d203e39267f64ea1bd54c00fe211e40fcd5/HiQS-Labs/XYZ-forge"
discussionCount: 0
---

# XYZ Forge

**A local-first engineering operations system for running AI coding agents as a workforce.**

XYZ Forge coordinates several AI coding agents — Claude Code, Codex, `agy` (Google's Antigravity
CLI), and others — working on the same repositories, and it carries the surrounding machinery an
unattended agent run actually needs: specified work, collision-free lanes, verification gates, and a
receipted record of what happened.

It started as a coordination kernel. It has become the loop around it:

```
capture → rate → plan → preflight → execute → gate → land → record
```

Every stage is a CLI verb or a skill, every artifact is on your disk, and no stage requires a
server, an account, or an API key for the coordination layer itself.

> **Safety and warranty:** XYZ Forge is provided **"AS IS," without warranty**, under the applicable
> license. Coding-agent automation is inherently risky: models may choose commands through their own
> runtimes and safety controls, outside the intended harness workflow. XYZ Forge cannot guarantee
> model behavior or data integrity; maintain tested, independent backups and follow industry-standard
> backup and recovery practices.

---

Claude…

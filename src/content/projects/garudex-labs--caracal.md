---
repo: "Garudex-Labs/caracal"
name: "caracal"
description: "🐾 Authority, not credentials, for AI agents: policy-approved actions, delegation that can only narrow, instant revocation, tamper-evident audit."
readmeQualityOk: true
url: "https://github.com/Garudex-Labs/caracal"
homepage: "https://www.caracal.run"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [66, 22]
topics: ["authorization", "agent-security", "ai-agents", "oauth2", "zero-trust"]
stars: 175
forks: 61
openIssues: 12
closedIssues: 163
watchers: 2
contributors: 18
recentReleases: 8
createdAt: "2025-06-23T16:50:05Z"
lastCommitAt: "2026-08-21T04:11:24Z"
lastReleaseAt: "2026-07-19T07:25:54Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["RAWx18", "Ashutoshx7", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1007225606/99d73021-73e8-4842-aeda-f05141df31c7"
fundingLinks: ["GITHUB:https://github.com/RAWx18"]
---

<picture>
<source media="(prefers-color-scheme: dark)" srcset="public/caracal_nobg_dark_mode.png">
<source media="(prefers-color-scheme: light)" srcset="public/caracal_nobg.png">
</picture>
</div>

**Authority, not credentials: Policy-checked, attributable, revocable, provable AI agent authorization.**

</div>

**Supported By:**

</div>

---

## Why Caracal

> **"Gateway-mediated agents never hold upstream credentials. Every action is policy-approved before it runs, scoped to exactly what was delegated, revocable in one call, and recorded as tamper-evident evidence."**

AI agents are entering production with **long-lived API keys in their environment**, **broader access than any task needs**, and **no answer to "which agent did this, under whose authority?"**

One prompt injection, leaked key, or runaway loop turns an assistant into an incident. Security reviews block launches. Auditors have nothing to inspect.

Existing tools weren't built for this: identity providers register agents but never see their actions, secrets managers hand the credential to the workload, and API gateways route traffic without deciding anything. Caracal is the missing control plane. It decides **what an…

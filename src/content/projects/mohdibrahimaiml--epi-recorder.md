---
repo: "mohdibrahimaiml/epi-recorder"
name: "epi-recorder"
description: "Decision records for AI agents: one signed .epi file per decision, checkable offline by the customer."
readmeQualityOk: true
url: "https://github.com/mohdibrahimaiml/epi-recorder"
homepage: "https://www.epilabs.org/"
language: "HTML"
languages: ["HTML"]
languagePcts: [76]
topics: ["ai-agents", "ai-governance", "audit-trail", "decision-record", "evidence", "python"]
stars: 29
forks: 5
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2025-11-24T11:38:39Z"
lastCommitAt: "2026-11-05T11:23:57Z"
lastReleaseAt: "2026-09-22T21:44:52Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 61
maintainers: ["mohdibrahimaiml", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e28fcb55a59dac036784db9adf8f9a3ca82e4e03730cb59c4f24cad1437a426/mohdibrahimaiml/epi-recorder"
discussionCount: 1
---

# EPI (Evidence Packaged Infrastructure) - Decision Records for AI agents

### Every AI decision needs a **Decision Record**.

Record what the model saw, what it decided and why, which model answered, and who approved it - then hand your customer one readable record they can check.

```bash
pip install epi-recorder
epi demo --no-browser    # record → seal → verify (no API key)
```

[60-second path](#60-second-path) ·
[What a .epi is](#what-a-epi-file-is) ·
[Decision Record](https://github.com/mohdibrahimaiml/epi-recorder/blob/HEAD/docs/DECISION-RECORD.md) ·
[CLI](#cli) ·
[How to use it](https://github.com/mohdibrahimaiml/epi-recorder/blob/HEAD/docs/USER-GUIDE.md) ·
[Docs](#docs) ·
[Standards](#standards--compliance)

How it works: [ARCHITECTURE.md](https://github.com/mohdibrahimaiml/epi-recorder/blob/HEAD/ARCHITECTURE.md) — packages, integrity model, and where to read next. Docs map: [docs/README.md](https://github.com/mohdibrahimaiml/epi-recorder/blob/HEAD/docs/README.md).

---

> When someone asks what your agent did six months ago,  
> the answer should be a **`.epi` file** — not a dashboard login and a shrug.

`epi-recorder` turns an AI agent's run into **evidence a third…

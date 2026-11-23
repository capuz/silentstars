---
repo: "daviderez4/nodatachat-core"
name: "nodatachat-core"
description: "NoData's open verification layer (@nodatachat/protect): check NoData's claims without trusting NoData, and see what your AI coding agent did on your computer. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/daviderez4/nodatachat-core"
homepage: "https://nodatacapsule.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["privacy", "security", "typescript", "claude-code", "agent-audit", "ai-agents", "codex", "hpke", "post-quantum", "secrets"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T15:58:01Z"
lastCommitAt: "2026-11-23T10:29:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 24
maintainers: ["daviderez4"]
openGraphImageUrl: "https://opengraph.githubassets.com/30bad62ee48f602d48d5229dbf2f419d34ca51ba8847f33f10d7171e776e30b0/daviderez4/nodatachat-core"
---

**Don't trust NoData. Verify NoData.**

This repository is the source of [`@nodatachat/protect`](https://www.npmjs.com/package/@nodatachat/protect),
NoData's verification layer: the formats, their specs, test vectors, and the readable code
that checks them, and `agent-check`, which shows what your AI coding agent did on your
computer. It does not run NoData and makes no network calls.

Every version is published from this repository by GitHub Actions, with an npm
**provenance** attestation: npm shows which commit and which workflow built the package
you install, so you can read exactly the code you run.

## What did your AI agent touch?

```bash
npx @nodatachat/protect@3 agent-check       # the last 30 days; --lang he for Hebrew
```

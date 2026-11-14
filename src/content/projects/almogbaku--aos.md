---
repo: "AlmogBaku/aos"
name: "aos"
description: "The batteries for your agent harness — a protocol + a set of capability implementations. Chief-of-staff use cases that install into the harness you already run, personalize via onboarding, and survive upgrades."
readmeQualityOk: true
url: "https://github.com/AlmogBaku/aos"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-17T16:44:53Z"
lastCommitAt: "2026-11-14T10:49:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 33
maintainers: ["AlmogBaku"]
openGraphImageUrl: "https://opengraph.githubassets.com/9580b6316f528c835546c3e1d1ce798c593520535974039ac06e97e18c29dd77/AlmogBaku/aos"
---

# aos

*The batteries for your agent harness.*

[Install](#install) • [What's included](#whats-included) • [The capability](#the-capability) • [Harnesses](#harnesses) • [Docs](#docs)

**A kit for building your own personal assistant.**

Your harness — Hermes, OpenClaw, NanoClaw, Claude Code — is a runtime: an agent, a model, tools,
somewhere to put a cron. It is not an assistant. Everything above the runtime you build yourself,
from scratch, per harness, and it lands as loose files you can't package, share, or move.

This kit is that missing layer, in two halves:

| | |
|---|---|
| **The protocol** | How you package anything for a runtime: the **capability**, an interview that personalizes it, an overlay that survives upgrades, a translation per harness. No runtime, no daemon, no service — the new software is a prompt. |
| **The implementations** | The batteries: **infrastructure** capabilities everything else builds on (a knowledge base, the capability lifecycle, soon agents talking to each other) and **personal-assistant** capabilities built on those. |

A personal chief of staff shouldn't be anyone's proprietary IP, so this is a commons — built for
ourselves, on whatever…

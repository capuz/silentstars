---
repo: "RudyCity/superagent"
name: "superagent"
description: "An interactive, terminal-based AI coding assistant featuring a cyberpunk style terminal UI, context token tracking, and subagent orchestration."
readmeQualityOk: true
url: "https://github.com/RudyCity/superagent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 63
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-09T15:06:10Z"
lastCommitAt: "2026-11-04T08:02:29Z"
lastReleaseAt: "2026-07-28T07:58:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["RudyCity"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c0169f51f70725671e601fe64d211384bfa5dc3fe428a398f5cd28f095eaa78/RudyCity/superagent"
---

# 🚀 Superagent

**A terminal-native general-purpose AI assistant for research, writing, planning, creative work, automation, and coding.**

---

## ⚡ Overview

**Superagent** is a terminal-native general-purpose AI assistant and autonomous operator—not a programmer by default. It helps with questions, research, writing, planning, documents, browsing and workflows, and switches to specialized coding tools and agents when a task actually requires development.

Superagent also pairs natively with **[t-line](https://github.com/RudyCity/t-line)**, its official desktop client.

---

### Chrome CDP Multi-Agent Gateway

SuperAgent CLI and MCP can coordinate multiple Bun agents across Chrome tabs with an atomic cross-process queue, secret session capabilities, read/write ownership checks, and session recovery. Use `superagent_chrome_cdp` with `claim_target`, then send the returned `sessionToken`, `agentId`, and `targetId` on every CDP/vision operation. Check `coordinator_status` for active sessions and queue pressure, and `release_target` when finished. The Chrome Extension bridge intentionally blocks actions while a CDP claim is active; separate profiles are required for separate browser…

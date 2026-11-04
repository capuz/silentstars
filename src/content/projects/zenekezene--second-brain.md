---
repo: "ZenekeZene/second-brain"
name: "second-brain"
description: "AI-maintained personal wiki. Raw material in, interconnected markdown articles out. Telegram bot, X sync, and scheduled agents for daily compilation, weekly linting, and monthly health checks."
readmeQualityOk: true
url: "https://github.com/ZenekeZene/second-brain"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T18:02:04Z"
lastCommitAt: "2026-11-04T08:04:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 29
maintainers: ["claude", "ZenekeZene"]
openGraphImageUrl: "https://opengraph.githubassets.com/2623816ed8b7924011b8ba578098d59451669c17acfcafabbe927d07dc9887a1/ZenekeZene/second-brain"
---

# Second Brain

**A self-hosted AI that reads what you save, builds your knowledge base overnight, and briefs you every morning. Runs on a $35 Raspberry Pi.**

Save a link from your phone at midnight. Wake up to a wiki article, cross-linked with everything you already know, with a morning briefing waiting in Telegram.

Not a RAG. Not a chatbot with memory. Not a tool you have to open. An autonomous system that compounds your knowledge while you sleep.

---

## How it feels

```
Monday night — you save three articles from your phone via Telegram.
Tuesday 07:00 — Pi compiles them into wiki articles while you sleep.
Tuesday 08:00 — Telegram briefing arrives: what was compiled, what needs review,
                 any tasks due today.
Tuesday morning — you open http://second-brain:4321 from any device.
                  Everything is already there.
```

No laptop open. No command to run. No maintenance.

---

## Quick Start

**Requirements:** [Claude Code CLI](https://claude.ai/code) · Node.js ≥ 20

```bash
git clone https://github.com/ZenekeZene/second-brain.git
cd second-brain
npm install
```

Open Claude Code inside the directory:

```bash
claude
```

Then type in the chat:

```…

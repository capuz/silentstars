---
repo: "chandra447/pi-hermes-memory"
name: "pi-hermes-memory"
description: "Hermes-style persistent memory and learning loop for Pi coding agent"
url: "https://github.com/chandra447/pi-hermes-memory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 160
forks: 37
openIssues: 1
closedIssues: 28
watchers: 2
contributors: 12
recentReleases: 10
createdAt: "2026-04-23T12:03:56Z"
lastCommitAt: "2026-06-25T06:41:13Z"
lastReleaseAt: "2026-05-27T09:13:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 35
maintainers: ["chandra447", "geri1701", "cgrabenstein"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aa98c9b19ccf35cac96fa35926a2e996d03167bf54e8fc9843d16226d236a3a/chandra447/pi-hermes-memory"
---

# 🧠 Pi Hermes Memory

**Persistent memory + session search + secret scanning for Pi**

---

</div>

Your Pi agent normally forgets everything when you close a session. **This extension fixes that.**

- 🔍 **Search every conversation** — "what did we discuss about auth?" finds it instantly
- 🧠 **Persistent memory** — facts, preferences, corrections survive across sessions
- ⚠️ **Learns from failures** — remembers what didn't work so you don't repeat mistakes
- 🏷️ **Categorized memories** — failures, corrections, insights, conventions, and tool quirks organized for fast retrieval
- 🛡️ **Secret scanning** — API keys and tokens are blocked from being saved
- 📚 **Procedural skills** — the agent saves *how* it solved problems, not just what
- ⚡ **Background learning** — reviews every 10 turns, saves what matters
- 🔄 **Auto-consolidation** — merges entries when full, never loses data

## Quick Start

```bash
# Install
pi install npm:pi-hermes-memory

# Index your past sessions (one-time)
/memory-index-sessions

# Backfill older Markdown memories into SQLite search (optional)
/memory-sync-markdown

# Learn how to use it
/learn-memory-tool
```

## Upgrade Notes (v0.7.10)

If you’re…

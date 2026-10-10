---
repo: "DragonJAR/Agydra"
name: "Agydra"
description: "Multi-profile launcher for the agy CLI (isolated OAuth per profile) on macOS, Linux and Windows"
readmeQualityOk: true
url: "https://github.com/DragonJAR/Agydra"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-24T09:18:25Z"
lastCommitAt: "2026-10-10T05:26:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["DragonJAR"]
openGraphImageUrl: "https://opengraph.githubassets.com/a75423f88af4b6307e034549c25db8a1e23ba91934934c17f19b7d475e9b7d28/DragonJAR/Agydra"
---

# Agydra

> **One installation. Four engines. Isolated accounts.** **Agydra** 1.1.0 is a multi-profile manager and workload dispatcher for **Google Antigravity (`agy`)**, **OpenAI Codex (`codex`)**, **xAI Grok (`grok`)**, and **Anthropic Claude Code (`claude`)**. Each profile keeps its own configuration and native authentication; Claude Code snapshots are informational. Claude Code preserves the real HOME and manages native authentication, including the macOS Keychain; Agydra does not extract, exchange or refresh its tokens itself. Python ≥ 3.9, standard library only.

---

## 💡 Why Agydra?

A Google One AI Premium / Google AI Pro family group can hold up to six accounts, and **each account has its own model quotas and 5-hour window**. The official `agy` CLI still reads a single `~/.gemini`, so switching accounts overwrites the session and parallel runs share one store and one keychain entry.

**Agydra** turns those accounts — and separate Codex, Grok, or Claude Code accounts — into one pool:

```
agy                 → generic session, real ~/.gemini
agydra -p fam-dev   → same agy binary, HOME points at an isolated overlay
agydra -e grok -r   → next unused Grok profile, ranked by…

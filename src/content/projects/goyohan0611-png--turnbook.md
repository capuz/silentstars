---
repo: "goyohan0611-png/turnbook"
name: "turnbook"
description: "Local long-term memory for AI agents. Keeps every conversation word for word, costs nothing to save, and is shared by all your agents. 88.8% on LongMemEval."
readmeQualityOk: true
url: "https://github.com/goyohan0611-png/turnbook"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["claude", "codex", "llm", "local-first", "longmemeval", "mcp", "memory", "ai-memory", "opencode", "agent-memory"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-08T02:43:03Z"
lastCommitAt: "2026-10-30T10:22:50Z"
lastReleaseAt: "2026-10-12T06:02:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["goyohan0611-png"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1409626040/84c84272-3fb7-464c-b53c-faac11eba3a3"
---

# Turnbook

### Your AI forgets everything when the session ends. This one remembers, and it never calls an LLM to do it.

**No AI summaries: every conversation is kept word for word, so nothing is lost or made up on the way in, and saving costs zero model tokens. 91.8% on LongMemEval from 3.1k tokens of memory per question ([0.10.0](#does-it-work)). Runs on your own PC.**

*Decide something with one agent on Monday. Ask another on Wednesday. It knows.*

| | tokens spent **saving** memory | text the answer model reads per question | LongMemEval |
|---|---|---|---|
| **Turnbook 0.10** | **0** | **3.1k tokens** | **91.8%** |
| Turnbook, previous search model | 0 | 26.3k tokens | 91.8% |

**English** · [한국어](https://github.com/goyohan0611-png/turnbook/blob/HEAD/README.ko.md)

If Turnbook saves you tokens or repeated explanations, a ⭐ helps other people find it.

## Install

Windows: download [Turnbook-Setup.cmd](https://raw.githubusercontent.com/goyohan0611-png/turnbook/main/scripts/Turnbook-Setup.cmd)
and double-click it, or in PowerShell:

```powershell
irm https://raw.githubusercontent.com/goyohan0611-png/turnbook/main/scripts/install.ps1 | iex
```

macOS / Linux:

```bash
curl…

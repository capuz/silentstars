---
repo: "Parad0x-Labs/nulla-local"
name: "nulla-local"
description: "Local-first AI agent that proves what it did — signs an offline-verifiable receipt for every action. Runs on your machine, private, never phones home. Alpha."
readmeQualityOk: true
url: "https://github.com/Parad0x-Labs/nulla-local"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "autonomous-research", "decentralized-ai", "multi-agent-systems", "ollama", "openclaw", "agent-runtime", "openai-compatible", "persistent-memory", "privacy-first"]
stars: 15
forks: 2
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-03-16T08:46:17Z"
lastCommitAt: "2026-07-08T05:43:14Z"
lastReleaseAt: "2026-03-16T12:23:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 33
maintainers: ["Parad0x-Labs"]
openGraphImageUrl: "https://opengraph.githubassets.com/c69514b3e557937859a69343d45a0474ad1b4d620c4fcc08443083f9c40131e7/Parad0x-Labs/nulla-local"
---

# NULLA

**A private AI agent that runs on your machine — and proves what it actually did.**

NULLA runs a real tool-using agent loop on your own hardware: it reads files, runs tests, writes code, searches the web, and remembers across sessions — and nothing leaves your box unless you say so. What nothing else ships: every turn it signs a receipt of what it *claimed* vs. what actually *ran* — Ed25519-signed, hash-chained, and verifiable by anyone, offline.

**Verify it yourself in 10 seconds — no signup, no server.** Clone and run the demo (Windows uses `py`; macOS/Linux uses `python3` — plain `python` may be a broken Store stub on Windows):

```powershell
# Windows (PowerShell)
if (!(Test-Path nulla-local)) { git clone https://github.com/Parad0x-Labs/nulla-local }; cd nulla-local
py -m pip install cryptography
py -m core.honesty_receipt demo
```

```bash
# macOS / Linux
[ -d nulla-local ] || git clone https://github.com/Parad0x-Labs/nulla-local; cd nulla-local
python3 -m pip install cryptography
python3 -m core.honesty_receipt demo
```

It signs a clean receipt and a caught-lying one, verifies both, then shows two forgery attempts fail — all offline. (`py -m core.honesty_receipt…

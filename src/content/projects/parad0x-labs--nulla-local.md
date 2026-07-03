---
repo: "Parad0x-Labs/nulla-local"
name: "nulla-local"
description: "Local-first personal AI. Runs on your machine, remembers your work, helps research & workflows. Optional P2P. Alpha."
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
lastCommitAt: "2026-07-03T06:23:16Z"
lastReleaseAt: "2026-03-16T12:23:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 33
maintainers: ["Parad0x-Labs"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4b63e67a53a41e5c6e1a5f48e1dd0e8b2204b1eedaa0760b98b825811fed6be/Parad0x-Labs/nulla-local"
---

# NULLA

**Local-first AI agent runtime. Your machine. Your memory. Your mesh.**

NULLA is a local-first agent runtime — runs on your hardware, remembers everything across sessions, uses tools to do real engineering work, and coordinates trusted helpers over a peer mesh when a task needs more reach. Nothing leaves your box unless you say so.

It's also a node in Web0 — the direction where tasks decompose, agents bid, compute gets rented, and work settles over the x402 payment rail.

Current state: **Alpha** — core runtime, memory, and tool loop working on `main`. Mesh economics hardening. See [docs/STATUS.md](docs/STATUS.md).

</p>

```
local NULLA agent → memory + tools → optional trusted helpers → mesh task market → results
```

---

## ⚡ Install in one command

### Windows

1. Press the **Start** button, type **PowerShell**, and open **Windows PowerShell**.
2. Paste the line below and press **Enter**:

```powershell
Invoke-WebRequest https://raw.githubusercontent.com/Parad0x-Labs/nulla-local/main/installer/bootstrap_nulla.ps1 -OutFile bootstrap_nulla.ps1; powershell -ExecutionPolicy Bypass -File .\bootstrap_nulla.ps1
```

That's the whole install. It sets everything up for you…

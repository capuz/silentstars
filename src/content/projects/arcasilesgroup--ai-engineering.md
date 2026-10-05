---
repo: "arcasilesgroup/ai-engineering"
name: "ai-engineering"
description: "The governance floor for AI coding agents: install, guard, prove. Guards, git hooks, an executable contract and a receipt per run — no hosted control plane, no provider lock-in."
readmeQualityOk: true
url: "https://github.com/arcasilesgroup/ai-engineering"
homepage: "https://ai-engineering.arcasiles.com"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [48, 41]
topics: ["ai-agents", "claude-code", "github-copilot", "developer-tools", "devsecops", "agent-skills", "ai-governance", "bun", "codex", "cursor"]
stars: 60
forks: 3
openIssues: 0
closedIssues: 296
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-04T11:52:23Z"
lastCommitAt: "2026-10-05T10:47:19Z"
lastReleaseAt: "2026-04-28T22:48:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["soydachi", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cae1c55a4f5a1e3876d9924419342ee50a1ef62f14c0fe3108dc742df46d1d4/arcasilesgroup/ai-engineering"
---

### Guardrails for the AI coding agent you already run

Guards that say <strong>no</strong> before the tool call runs.<br/>
A receipt for every denial, on disk, in git.</p>

| | |
|---|---|
| **5** guards | decide before the call runs, and write a receipt |
| **1 canon** | skills, mirrored into Claude Code, Oh My Pi and OpenCode |
| **8** surfaces | one payload, no per-IDE fork |
| **1** binary | Bun-compiled, no daemon, no hosted control plane |
| **0** model calls | by `ai-eng` itself — your key, your model |

## Install

```bash
bun add -g ai-engineering@latest && ai-eng init    # or: npm install -g ai-engineering@latest
```

One command. `init` asks which agents to govern, installs the canon on your machine, and writes
the contract into this repository. It is idempotent — run it again whenever you like.

`ai-eng` runs its TypeScript source under [bun](https://bun.com), the same way the Python
release needed `python>=3.11`: install bun once and both `npm install -g` and
`bun add -g` work. The launcher fails with an honest message if bun is missing.

```bash
git clone https://github.com/arcasilesgroup/ai-engineering.git
cd ai-engineering && bun install && bun run build && bun…

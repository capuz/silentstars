---
repo: "a3ro-dev/qenlo-memory"
name: "qenlo-memory"
description: "one local memory for all your coding agents (claude code, codex, cursor, antigravity, gemini, opencode). mcp server + skill, built on qenlo."
readmeQualityOk: true
url: "https://github.com/a3ro-dev/qenlo-memory"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-26T05:09:16Z"
lastCommitAt: "2026-11-15T11:19:16Z"
lastReleaseAt: "2026-10-31T11:44:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 54
maintainers: ["a3ro-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/719862a25a6ec59bc170acb4830178fe7604b3dfceb27bf44cf923096a4ebc12/a3ro-dev/qenlo-memory"
---

# qenlo-memory



i use claude code, codex, cursor, antigravity, gemini cli and copilot. each one starts every session knowing nothing, and none of them knows what the others figured out an hour ago. so the same release steps, the same preferences and the same "no, we tried that" get explained again, once per agent.

qenlo-memory is one local memory that all of them share. it's a CLI your agents run from their shell, one brain folder they all link to, and hooks. an MCP server is still there for agents without a shell. every agent can read everything, and every memory records which agent wrote it, so `recall` might hand claude code a fix that codex found yesterday, labeled `by codex`.

it runs on [qenlo](https://github.com/a3ro-dev/qenlo), the embedded vector database i'm building, through its python sdk (`qenlo==0.1.0b2`). building a real product on it was also a way to find out where it hurts.

## install

mac and linux:

```bash
curl -fsSL https://raw.githubusercontent.com/a3ro-dev/qenlo-memory/main/install.sh | sh
```

windows (powershell):

```powershell
irm https://raw.githubusercontent.com/a3ro-dev/qenlo-memory/main/install.ps1 | iex
```

the script…

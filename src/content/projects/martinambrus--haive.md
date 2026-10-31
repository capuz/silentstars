---
repo: "martinambrus/haive"
name: "haive"
description: "Deterministic multi-CLI orchestration and AI agentic workflow utility."
readmeQualityOk: true
url: "https://github.com/martinambrus/haive"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "ai-agents", "ai-tools", "claude", "claude-ai", "claude-code", "claude-code-skills", "claude-skills", "claudecode", "claudecode-mcp"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-14T08:02:57Z"
lastCommitAt: "2026-10-31T02:01:53Z"
lastReleaseAt: "2026-09-09T22:43:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["martinambrus"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb9d1cde65db862495595c79938f95f50b963da092e9ff6f8157833c1ae48b02/martinambrus/haive"
discussionCount: 1
---

# hAIv<sup>e</sup>

Deterministic multi-CLI orchestration and AI agentic workflow utility. Replaces a markdown-driven Claude Code onboarding flow, an autonomous `/workflow` implementation loop, and a sandboxed local environment replication step set with a deterministic web project. Agentic CLI invocations only happen for parts that need reasoning; everything else is a TypeScript step module with a web form.

## Install

There are two ways in and they are different things. **Run a release** boots published images —
no source, no build, one command. **Build from source** is the contributor path and is what the
rest of this file documents.

### Run a release

```bash
curl -fsSL https://raw.githubusercontent.com/martinambrus/haive/main/install/install.sh | sh
```

```powershell
irm https://raw.githubusercontent.com/martinambrus/haive/main/install/install.ps1 | iex
```

Linux, macOS and Windows. On Windows this is PowerShell with Docker Desktop — no WSL shell is
involved; Docker Desktop uses WSL2 as its engine, which is its plumbing rather than a requirement
on you. If you would rather read a script than pipe one into a shell, download it, read it, run it.

**Docker is the only…

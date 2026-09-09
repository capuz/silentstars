---
repo: "sergeyklay/.agents"
name: ".agents"
description: "My personal, curated set of artifacts for AI coding agents"
readmeQualityOk: true
url: "https://github.com/sergeyklay/.agents"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [56, 26]
topics: ["agent-skills", "agents", "agentic-workflow", "claude-code-skills", "claude-skills", "codex-skill", "codex-skills", "copilot-coding-agent", "copilot-skills", "gemini"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T08:56:32Z"
lastCommitAt: "2026-09-09T08:18:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 54
maintainers: ["sergeyklay"]
openGraphImageUrl: "https://opengraph.githubassets.com/e36e607b4052fd2079a84d1262e1197aa9a53cdc16cbf7fb34d2b383f9a1c400/sergeyklay/.agents"
fundingLinks: ["GITHUB:https://github.com/sergeyklay", "KO_FI:https://ko-fi.com/iserghei"]
---

</p>

**One set of rules, skills, and agents that follows you across every AI coding tool.**

</div>

Clone it once, run the installer, and Claude Code, Codex, Copilot, Gemini, and opencode all read the same instructions - no copy-pasting between config directories, no drift between machines.

## The Problem

Every AI coding host invents its own config directories, file formats, and frontmatter fields. Keeping your rules and skills in sync across five hosts and several machines means hand-editing the same content again and again - and the copies quietly drift apart.

Collecting prompts from the internet makes it worse: most of it is scrap you never use, and stale instructions actively confuse your agent.

## How It Works

This repository holds one canonical copy of everything: working rules, agent skills that follow the published [specification](https://agentskills.io), and agents for each host. A single script, `scripts/install.sh`, adds the host-specific fields each tool expects and writes every file to where that host reads it.

Nothing here is scraped or collected. Each file earns its place by being something I reach for daily; when it stops pulling its weight, it gets…

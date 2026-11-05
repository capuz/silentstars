---
repo: "pea3nut/agent-add"
name: "agent-add"
description: "Install MCP, Skills, slash commands, sub-agents and more into any AI tool like Claude Code, Cursor, etc."
readmeQualityOk: true
url: "https://github.com/pea3nut/agent-add"
language: "TypeScript"
languages: ["TypeScript", "Gherkin"]
languagePcts: [66, 33]
topics: ["cli", "llm", "mcp", "slash-commands", "sub-agents", "vibe-coding"]
stars: 27
forks: 4
openIssues: 5
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-17T07:26:27Z"
lastCommitAt: "2026-11-05T00:21:42Z"
lastReleaseAt: "2026-11-01T20:19:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 44
maintainers: ["pea3nut-2", "gfargo", "pea3nut"]
openGraphImageUrl: "https://opengraph.githubassets.com/45a3101ba34cf4d94f0ef0615fb64b37652cb5641a6556dc539d3ad353eaa96c/pea3nut/agent-add"
---

# agent-add

**Install MCP, Skills, slash commands, sub-agents and more into any AI tool like Claude Code, Cursor, etc.**

**English** | [中文](https://github.com/pea3nut/agent-add/blob/HEAD/docs/README.zh-CN.md) | [日本語](https://github.com/pea3nut/agent-add/blob/HEAD/docs/README.ja.md)

---

```bash
npx -y agent-add \
  --mcp '{"playwright":{"command":"npx","args":["-y","@playwright/mcp"]}}' \
  --mcp 'https://github.com/modelcontextprotocol/servers.git#.mcp.json' \
  --skill 'https://github.com/anthropics/skills.git#skills/pdf' \
  --prompt $'# Code Review Rules\n\nAlways review for security issues first.' \
  --command 'https://github.com/wshobson/commands.git#tools/security-scan.md' \
  --sub-agent 'https://github.com/VoltAgent/awesome-claude-code-subagents.git#categories/01-core-development/backend-developer.md'
```

---

## Supported Hosts

### Project scope (default)

Install into the current project without `--global`.

| AI Tool | MCP | Prompt | Skill | Command | Sub-agent |
|------|-----|--------|-------|---------|-----------|
| <img src="https://www.google.com/s2/favicons?domain=cursor.com&sz=32" width="16"> Cursor | ✅ | ✅ | ✅ | ✅ | ✅ |
| <img…

---
repo: "sheepk95/The-Cartographer"
name: "The-Cartographer"
description: "Ask which agent skills fit a task before you start it. One model call reads your task against the whole SKILL.md catalogue (193 skills bundled, plus yours) and names the few worth reading. CLI and MCP server for Claude Code, Codex, the Anthropic API or a local model. Python, standard library only."
readmeQualityOk: true
url: "https://github.com/sheepk95/The-Cartographer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "agentic-coding", "ai-agents", "ai-coding-agents", "anthropic", "claude-code", "claude-skills", "cli", "codex", "context-engineering"]
stars: 2
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-28T15:08:06Z"
lastCommitAt: "2026-10-29T05:43:16Z"
lastReleaseAt: "2026-10-29T05:45:18Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 28
maintainers: ["sheepk95"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1437247498/b1f90ca5-5f75-4a5c-8381-55383fb4bb17"
promoted: true
postedAt: "2026-11-02T13:46:07.915Z"
---

# The Cartographer

**Ask which agent skills fit a task before you start it.**

**For people whose agent has more skills than it can keep in mind.** Agents that use skills (`SKILL.md` folders, as
in Claude Code and Codex) get worse as the pile grows: either every description sits in the context on every turn, or
the agent guesses from names and opens the wrong ones. The Cartographer is one model call instead. It maps a short
brief of the task against your **whole** skill library and points to the few skills worth reading first. "None" is a
valid answer.

Your own skills are the point: it reads the skill folders you already have. The 193 bundled skills are a starter
library.

**Try it** (needs [uv](https://docs.astral.sh/uv/), plus a Claude Code or Codex login; with a Claude API key instead,
run `uvx --from "the-cartographer[api]" the-cartographer ask "..."`):

```bash
uvx the-cartographer ask "Add property-based tests for our Python date-parsing module"
```

In Claude Code 2.1.275 or later, the plugin asks it for you at the start of each task (needs uv):
`/plugin install the-cartographer --marketplace sheepk95/The-Cartographer`. Other installs: [Quick start](#quick-start).

### A…

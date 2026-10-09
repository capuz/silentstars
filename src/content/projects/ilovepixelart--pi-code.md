---
repo: "ilovepixelart/pi-code"
name: "pi-code"
description: "Claude Code experience for the pi coding agent: reads your .claude config (rules, commands, skills, hooks, output styles, MCP, agents) and adds todo, checkpoints, memory, web search, and subagents."
readmeQualityOk: true
url: "https://github.com/ilovepixelart/pi-code"
homepage: "https://npmjs.com/package/pi-code"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agent", "claude-code", "coding-agent", "developer-tools", "extensions", "mcp", "model-context-protocol", "npm-package", "pi", "typescript"]
stars: 34
forks: 9
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-17T12:24:59Z"
lastCommitAt: "2026-10-09T10:51:17Z"
lastReleaseAt: "2026-07-23T09:26:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["ilovepixelart", "dependabot[bot]", "wayne930242"]
openGraphImageUrl: "https://opengraph.githubassets.com/310735b7be7352c83ef7ec3b6a0037a271f8d449448f57cccf21ccba318138e1/ilovepixelart/pi-code"
---

# pi-code

\
\

Claude Code experience for the [pi](https://pi.dev) coding agent, in one package. Point pi at a project that already has a `.claude/` directory and it reads your existing config: rules, commands, skills, hooks, output styles, MCP servers, and agents. It also adds the Claude Code features pi lacks: a todo overlay, checkpoints, memory, web search, subagents, and goals.

What a repository ships is treated as untrusted until you approve it: project MCP servers, hooks, agents, rules, output styles, commands and skills load only once you say yes. A headless run (`pi -p`) cannot ask, so an undecided project loads none of them there, which is stricter than Claude, where a headless run uses them without showing the dialog.

## Requirements

pi `>=0.80.5` (0.99.x recommended) and Node `>=22.19` for current pi.

## Install

```bash
pi install npm:pi-code       # from npm
pi install -l npm:pi-code    # project-local instead, writes .pi/settings.json
```

Other sources:

```bash
pi install git:github.com/ilovepixelart/pi-code
pi install ./pi-code         # local checkout, then /reload after edits
```

One `pi install` and everything below loads on the next start. `pi list`…

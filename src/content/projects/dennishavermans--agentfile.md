---
repo: "dennishavermans/agentfile"
name: "agentfile"
description: "Find what is wrong with the AI agent configuration your repository already has."
readmeQualityOk: true
url: "https://github.com/dennishavermans/agentfile"
homepage: "https://www.npmjs.com/package/@agentfile/cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agentic-workflow", "agents-md", "ai-agent", "ai-coding", "ai-governance", "ai-security", "ai-tools", "claude-code", "code-quality", "code-scanning"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-12T20:46:46Z"
lastCommitAt: "2026-09-09T08:19:48Z"
lastReleaseAt: "2026-09-05T11:14:52Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 55
maintainers: ["dennishavermansAE", "dennishavermans", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd1f1c01cd9c6ff4480ebff42be05f1318683b05ffe295dd962a9ba9627dc8f3/dennishavermans/agentfile"
---

</p>

> Find what is wrong with the AI agent configuration your repository already has.

Your team uses Claude Code, Copilot, Cursor, Codex — each with its own instruction file, in its own format, in its own place. Nobody reads all of them at once, so they drift, contradict each other, and quietly cost context in every session.

`agentfile` reads them as they are and tells you what is wrong.

```bash
npx @agentfile/cli doctor
```

No setup. No file to adopt first. Nothing written to disk. **Nothing it finds is ever executed** — hooks, skills, commands and MCP configuration are read as text, and a clean result says "no pattern matched", never "this is safe".

---

## The problem

The same rule, maintained in four places, drifting apart:

```
AGENTS.md                        ← the one that is current
CLAUDE.md                        ← a copy, edited last month
.github/copilot-instructions.md  ← a copy, probably out of date
.cursor/rules/main.mdc           ← different format, different rules
```

Symlinks solve the copying. They do not tell you that two of these disagree about the package manager, that a hook points at a script nobody committed, that a `.mcp.json` server will…

---
repo: "fabis94/universal-ai-config"
name: "universal-ai-config"
description: "Generate tool-specific AI config files from shared templates. Write your AI instructions, skills, and agents once — generate config for Claude Code, GitHub Copilot, and other targets automatically."
readmeQualityOk: true
url: "https://github.com/fabis94/universal-ai-config"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 1
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T21:32:46Z"
lastCommitAt: "2026-11-05T14:05:19Z"
lastReleaseAt: "2026-02-09T09:19:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 25
maintainers: ["fabis94"]
openGraphImageUrl: "https://opengraph.githubassets.com/66021a28201eb6dd5767253fdc79ae8ced5667e1c85bb2cceff381cfc8ca7fb5/fabis94/universal-ai-config"
---

# universal-ai-config

One source for your AI coding config (instructions, skills, agents, hooks and MCP servers) for **Claude Code**, **GitHub Copilot**, **Cursor** and **OpenAI Codex**. Keep it as templates that `uac` renders into each tool's own format, or in the open standards with uac filling the gaps.

```
.universal-ai-config/  ──── uac generate ────▶  .claude/  .github/  .cursor/  .codex/  AGENTS.md
```

## 🤔 Why

Every AI coding tool keeps its config in its own folders and format. A team that wants one shared config, while each developer uses a different tool, ends up copying rules between `.claude/`, `.github/`, `.cursor/` and `AGENTS.md` by hand.

uac gives the team one source, kept one of two ways:

- **Templates** (the default): you write templates in `.universal-ai-config/`, and uac renders each tool's native files from them. Each developer generates only the tools they use, and the generated folders stay out of git.
- **Open standards**: your instructions stay in `AGENTS.md` files and your skills in `.agents/skills/`, which most tools read on their own, and uac fills the gaps.

## 📦 Install

```bash
npm install -D universal-ai-config
```

Not a JavaScript project?…

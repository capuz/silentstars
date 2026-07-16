---
repo: "mohanagy/madar"
name: "madar"
description: "Stop AI coding agents from rediscovering large TypeScript/Node repos with task-aware local context packs."
readmeQualityOk: true
url: "https://github.com/mohanagy/madar"
homepage: "https://mohanagy.github.io/madar/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-coding-agents", "claude-code", "codebase-analysis", "codex", "copilot", "cursor", "knowledge-graph", "mcp", "nodejs", "static-analysis"]
stars: 18
forks: 8
openIssues: 0
closedIssues: 181
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-04-11T15:14:38Z"
lastCommitAt: "2026-07-16T06:00:48Z"
lastReleaseAt: "2026-04-20T20:54:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["mohanagy", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8cad7261afe79daf337df69f8067c6adf5e891f99adba86f32cf12eb68e6538/mohanagy/madar"
discussionCount: 0
---

# Madar

**Give your coding agent the repo context it needs before it starts searching.**

Madar builds a local graph of your TypeScript or Node.js repository and turns the current question into a small, task-aware context pack. Claude Code, Codex, Cursor, Copilot, Gemini, Aider, and OpenCode can start from relevant files, symbols, snippets, and relationships instead of rediscovering the repository from scratch.

- **Start smaller:** give the agent likely entrypoints and runtime paths before broad search.
- **Stay local:** graph generation does not upload your source code or require a cloud service.
- **Stay current:** installed MCP profiles refresh the graph as the active workspace changes.

## Try It in 60 Seconds

Install Madar with Node.js 20 or newer, then run it inside your repository:

```bash
npm install -g @lubab/madar
cd your-repository
madar try "how does authentication work?"
```

`madar try` builds or reuses the local graph, prints a human-readable first result, and recommends the next agent-install command. It does not modify your source code.

For a concrete example, Madar's included password-reset workspace contains this path:

```text
account-routes.ts
  ->…

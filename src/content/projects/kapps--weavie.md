---
repo: "Kapps/weavie"
name: "weavie"
description: "Agentic code editor that weaves Claude Code, terminal sessions, and full code editing into one workflow."
readmeQualityOk: true
url: "https://github.com/Kapps/weavie"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [56, 41]
stars: 5
forks: 1
openIssues: 66
closedIssues: 97
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-15T04:40:06Z"
lastCommitAt: "2026-11-13T04:43:23Z"
lastReleaseAt: "2026-09-16T02:17:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 60
maintainers: ["Kapps"]
openGraphImageUrl: "https://opengraph.githubassets.com/89aae8cc7df4c4b8b55c769e0cc8188cffef91227a14c5a89500e5df2f2bec12/Kapps/weavie"
---

# weavie

Weavie is an agentic code editor that weaves Claude Code, Codex, or other ACP agents, terminal sessions, and full code editing into one workflow.

It's designed for a workflow where you develop agent-first, but still care about the code and want easy access to review and make changes.

The goal is to support the workflow that a software engineer is likely to use in their day-to-day: manual code changes, reviewing PRs, or even editing Notion docs directly in the IDE.

## Features
- **Fully featured editor**: The editor is a first class development environment with full LSP support. This includes autocomplete, go to definition, refactoring, running tests, and more.
- **Parallel development**: Weavie has first class support for worktrees, so you can work on several features at a time in their own branches.
- **Seamless remote/local sessions**: Each worktree can run either locally or remote, and the experience is identical between them. This includes hooks into Claude Code to make features like remote copy/paste, pasting images, URL opening, etc, all work just like they would locally.
- **Context aware**: Weavie gives your agent context from the editor, including what file…

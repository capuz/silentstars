---
repo: "tigreau/catclip"
name: "catclip"
description: "CLI tool that finds files and folders by fuzzy name and recursively concatenates files to your clipboard as AI context for ChatGPT, Claude, and LLMs. Easy to use, no setup."
readmeQualityOk: true
url: "https://github.com/tigreau/catclip"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ai-context", "chatgpt", "cli", "clipboard", "codebase-to-text", "concatenate", "developer-tools", "homebrew", "linux", "llm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-05-23T22:36:17Z"
lastCommitAt: "2026-09-02T08:00:16Z"
lastReleaseAt: "2026-06-09T23:56:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 64
maintainers: ["tigreau"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c1ea44356b9ff1257968ce52573a43e382b479457fffbda79245a6cb987642/tigreau/catclip"
---

# catclip

Copy code context for AI assistants. One command, smart defaults, no setup.

```bash
catclip src                # copy src/ to your clipboard
```

---

## You don't need to remember the flags

catclip has an interactive mode that builds commands for you. Just add `--` and pick from menus:

```bash
catclip                     # pick files or folders from a menu
catclip --                  # pick targets, then pick filters from menus
catclip src --              # pick filters for src from a menu
catclip src -- --           # chain menus to build a full command
```

Every flag, filter, and output mode is reachable through the menus. The resolved command is echoed back so you can reuse it later.

---

## Direct commands (when you know what you want)

These examples use one project with a React app in `src/`, Go code in `cmd/`
and `internal/`, and documentation in `docs/`.

```bash
# Targets
catclip src                            # a folder
catclip Button.tsx                     # a file (finds it anywhere)
catclip btn                            # fuzzy picker
catclip src internal docs              # multiple targets
catclip "*.go"                         # glob pattern —…

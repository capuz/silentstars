---
repo: "ashlrai/phantom"
name: "phantom"
description: "Phantom by AshlrAI: an open-source engineering agent workbench for Claude Code, Codex, Devin, Grok and local models. Connect your resources, work with agents, or run an autonomous fleet."
readmeQualityOk: true
url: "https://github.com/ashlrai/phantom"
homepage: "https://phm.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["agentic-engineering", "ai", "cli", "developer-tools", "local-first", "mcp", "raycast", "typescript", "ai-agents", "autonomous-agents"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-06-09T03:17:27Z"
lastCommitAt: "2026-10-31T15:56:35Z"
lastReleaseAt: "2026-09-23T03:02:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 74
maintainers: ["masonwyatt23"]
openGraphImageUrl: "https://opengraph.githubassets.com/25f5cbf24c0d41fc28197841fe8463ae28257ddc10b79e611b9ce25dcb51545a/ashlrai/phantom"
discussionCount: 1
---

# Phantom

**Phantom runs all engineering and manages resources.**

The open-source engineering agent workbench, by [AshlrAI](https://ashlr.ai).
Connect eligible Claude Code, Codex, Grok or Devin accounts, API credits or
tool-capable local models — then work with agents interactively, or hand the
fleet an outcome, and review the recorded runs, changes and verification it
leaves behind.

[Get Phantom](https://github.com/ashlrai/phantom/releases/latest) ·
[Onboarding](https://phm.dev/connect) ·
[User guide](https://github.com/ashlrai/phantom/blob/HEAD/docs/VERSE.md) ·
[Desktop app](#the-desktop-app-macos) ·
[CLI](#the-cli)

## Quickstart

```sh
node --version                  # must print v22.15.0 or newer; npm only warns on older Node
npm install -g @ashlr/phantom   # `phm` and the compatible `ashlr` alias; macOS, Linux and Windows
phm --version                   # report the installed version
phm verse                       # serve the console at http://127.0.0.1:7777/verse/
```

`phm verse` prints a **read token** and a **mutation token**; the server
listens on `127.0.0.1` only, and neither token is written to disk. On an
Apple silicon Mac, [the desktop…

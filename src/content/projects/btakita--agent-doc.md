---
repo: "btakita/agent-doc"
name: "agent-doc"
description: "Interactive document sessions with AI agents"
readmeQualityOk: true
url: "https://github.com/btakita/agent-doc"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 7
forks: 1
openIssues: 2
closedIssues: 335
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T16:35:53Z"
lastCommitAt: "2026-11-03T19:02:25Z"
lastReleaseAt: "2026-02-25T23:28:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 63
maintainers: ["btakita"]
openGraphImageUrl: "https://opengraph.githubassets.com/09efb708fd1dcf30e8687be8c4fd5bda2ef1493b7116506af17090e06f1fe1e7/btakita/agent-doc"
---

# agent-doc

**Your markdown document is the conversation.**

agent-doc turns an ordinary markdown file into a live session with an AI coding
agent. You write in the document, press a hotkey (or just keep typing), and the
agent reads what you changed and writes its answer back into the same file.
Nothing scrolls away: you can reorganize, annotate, and prune the conversation
like any other document, and every turn is committed to git.

> **Alpha software.** Actively developed; commands and frontmatter may change
> between versions. **Single-user only**: use a private git repository (see
> [Security](#security)).

## Getting started

From a clean machine to your first agent turn. Each step links to the full
guide if you need more.

**You need:** `git`, `tmux`, and one agent CLI that already works on its own
in a terminal: [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
(`claude`), Codex, Grok Build, or OpenCode. agent-doc drives that agent; it does
not replace it or hold your API keys.

**1. Install the CLI.**

```sh
curl -fsSL https://raw.githubusercontent.com/btakita/agent-doc/main/install.sh | sh
agent-doc --version
```

`pip install agent-doc` and `brew install…

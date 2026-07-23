---
repo: "jolliai/jolliai"
name: "jolliai"
description: "Jolli Memory automatically turns your AI coding sessions into structured development documentation attached to every commit, without any extra effort."
readmeQualityOk: true
url: "https://github.com/jolliai/jolliai"
homepage: "https://jolli.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 118
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2026-04-13T20:41:31Z"
lastCommitAt: "2026-07-23T06:14:32Z"
status: "thriving"
tags: ["funded"]
healthScore: 89
undervaluedScore: 29
maintainers: ["summerfang-jolli", "flyerli2025", "sanshizhang-jolli"]
openGraphImageUrl: "https://opengraph.githubassets.com/44b923d574b58a60909d02bd41253378e9e0e1d06e425a239e714d914288d6f4/jolliai/jolliai"
fundingLinks: ["CUSTOM:https://jolli.ai"]
discussionCount: 0
---

# Jolli Memory

> *Every commit deserves a Memory. Every memory deserves a Recall.*

**Jolli Memory** automatically turns your AI coding sessions into structured development documentation attached to every commit, with no extra effort.

When you work with AI agents (Claude Code, Codex, Gemini CLI, OpenCode, Cursor, GitHub Copilot CLI, or VS Code Copilot Chat), the reasoning behind every decision lives in the conversation: *why this approach was chosen, what alternatives were weighed, what went wrong along the way*. The moment you commit, that context is gone. Jolli Memory captures it automatically.

*Ask your AI agent about a past decision; it answers from the reasoning Jolli captured at commit time.*

---

## Quick start

Install the CLI, run `jolli`, and your next commit becomes your first memory.

```bash
npm install -g @jolli.ai/cli   # requires Node 22.5+
cd your-repo
jolli                          # guided setup: sign in to Jolli, enable hooks, optional backfill
```

Sign in when prompted (it opens your browser, no API key to manage). That is the whole setup: work with your AI agent as usual, commit, and the memory is written automatically. Read it back anytime:

```bash…

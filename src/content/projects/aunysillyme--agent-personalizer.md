---
repo: "aunysillyme/agent-personalizer"
name: "agent-personalizer"
description: "AI custom instructions from approved entries: a profile and rules for Claude Code, Codex, Cursor, Gemini CLI, Hermes Agent and ChatGPT, kept in sync from one source."
readmeQualityOk: true
url: "https://github.com/aunysillyme/agent-personalizer"
homepage: "https://agent-personalizer.aunysillyme.dev"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [78, 22]
topics: ["agent-onboarding", "agents-md", "ai-agents", "chatgpt", "claude-code", "codex", "cursor", "custom-instructions", "gemini-cli", "mcp"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 32
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-03T23:02:41Z"
lastCommitAt: "2026-11-04T02:56:30Z"
lastReleaseAt: "2026-09-23T19:51:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 61
maintainers: ["aunysillyme", "claude", "mikemikimike"]
openGraphImageUrl: "https://opengraph.githubassets.com/75ba03c0be98ff751aeadb1c8ba85ddcfdce37e2cec1f9d13bba1a7e3c21efce/aunysillyme/agent-personalizer"
fundingLinks: ["GITHUB:https://github.com/aunysillyme", "BUY_ME_A_COFFEE:https://buymeacoffee.com/aunysillyme"]
---

# agent-personalizer

**Every AI you use gets the same profile and the rules it can carry:** Claude Code, Codex, Cursor, Gemini CLI, Hermes Agent and ChatGPT, rendered from one source and kept in sync.

**The problem:** Custom instructions live in each app separately, drift apart and fade over a long chat.

**What you get:** One profile and one rule source, rendered into the exact file each AI reads, with a check that fails when a generated copy drifts.

## Quick start

```bash
npx agent-personalizer
```

## What it sets up

| Part | What it gives you |
|---|---|
| `USER.md` | Your profile, communication preferences and how firmly you mean things. It owns the profile in every profile export. |
| `LEARNED.md` | Entries you confirmed or declined, shared with every personal AI target you selected. |
| Local session digest | With your yes, recent typed messages your AI uses to ask up to five evidence-backed questions. |
| `AGENT_ONBOARDING.md` | Your AI's reading order, writing policy, off-limits topics and approval steps. |
| `CLAUDE.md` | Your profile and selected rules in Claude Code's project instruction file. |
| `AGENTS.md` | Your profile and selected rules in the project file…

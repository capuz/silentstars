---
repo: "BaseInfinity/claude-sdlc-wizard"
name: "claude-sdlc-wizard"
description: "SDLC enforcement for Claude Code — hooks, skills, and wizard setup in one command. TDD, planning, self-review, CI shepherd."
url: "https://github.com/BaseInfinity/claude-sdlc-wizard"
homepage: "https://www.npmjs.com/package/agentic-sdlc-wizard"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["ai-agent", "anthropic", "claude-ai", "claude-code", "code-quality", "developer-tools", "sdlc", "tdd"]
stars: 31
forks: 4
openIssues: 4
closedIssues: 69
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-01-19T03:02:12Z"
lastCommitAt: "2026-06-23T23:16:39Z"
lastReleaseAt: "2026-04-18T01:50:29Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["BaseInfinity"]
openGraphImageUrl: "https://opengraph.githubassets.com/9192692a5fdd304a691aecc82857dc3b7041693bb2d8827ec244a434692e3813/BaseInfinity/claude-sdlc-wizard"
fundingLinks: ["GITHUB:https://github.com/BaseInfinity"]
discussionCount: 0
---

# Claude Code SDLC Wizard

A **self-evolving Software Development Life Cycle (SDLC) enforcement system for AI coding agents**. Makes Claude plan before coding, test before shipping, and ask when uncertain. Measures itself getting better over time.

**Built on 15+ years of software engineering and founding engineering experience** — battle-tested patterns from real production systems, baked into an AI agent that follows tried-and-true software quality practices so you don't have to enforce them manually.

> **Built for Claude Code.** Using OpenAI's Codex CLI instead? Check out [`codex-sdlc-wizard`](https://github.com/BaseInfinity/codex-sdlc-wizard). Need privacy-first / any-backend (local Ollama, Azure OpenAI, hosted OSS)? See [`opencode-sdlc-wizard`](https://github.com/BaseInfinity/opencode-sdlc-wizard). ([Full ecosystem](#xdlc-ecosystem-sibling-projects).)

## Install

**Requires [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)** (Anthropic's CLI for Claude).

Run from your terminal or from inside Claude Code (`!` prefix):
```bash
npx -y agentic-sdlc-wizard@latest init
```
The `@latest` pin forces npm to fetch the newest version. Without it, `npx` may serve…

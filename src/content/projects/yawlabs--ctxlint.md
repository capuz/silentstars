---
repo: "YawLabs/ctxlint"
name: "ctxlint"
description: "Lint your AI agent context files (CLAUDE.md, AGENTS.md, etc.) against your actual codebase"
url: "https://github.com/YawLabs/ctxlint"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-05T22:42:20Z"
lastCommitAt: "2026-06-27T00:36:41Z"
lastReleaseAt: "2026-04-25T16:50:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["jeffyaw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d90c8980ab5a14d8d2427654a02ef822eb24f900f12657c6892056fca4f37597/YawLabs/ctxlint"
---

# ctxlint

**Lint your AI agent context files, MCP server configs, and session data against your actual codebase.** Context linting + MCP config linting + session auditing. 16 AI tools, 8 MCP clients, cross-project consistency, auto-fix. Works as a CLI, CI step, pre-commit hook, or MCP server.

Your `CLAUDE.md` is lying to your agent. Your `.mcp.json` has a hardcoded API key. ctxlint catches both.

One click adds this to your local Yaw MCP config so it's available in every Yaw Terminal session. Or install manually below.

## Why ctxlint?

Every AI coding tool ships a context file: `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `.mcp.json`. These files are the single most important interface between you and your agent — they tell it what to build, how to test, where things live.

But context files rot fast. You rename a file, change a build script, or switch from Jest to Vitest — and your `CLAUDE.md` still says the old thing. Your agent follows those stale instructions faithfully, then fails. You lose 10 minutes debugging what turns out to be a wrong path in line 12 of a markdown file.

Multiply that across a team with 5 context files, 3 MCP configs, and 2 people who touched the build…

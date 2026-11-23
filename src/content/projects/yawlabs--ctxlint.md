---
repo: "YawLabs/ctxlint"
name: "ctxlint"
description: "Lint your AI agent context files (CLAUDE.md, AGENTS.md, etc.) against your codebase"
readmeQualityOk: true
url: "https://github.com/YawLabs/ctxlint"
homepage: "https://yaw.sh/mcp-servers/ctxlint/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agents-md", "ai-agents", "ai-coding", "claude-code", "context-engineering", "cursor", "github-copilot", "linter", "mcp", "mcp-server"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-04-05T22:42:20Z"
lastCommitAt: "2026-11-23T12:21:51Z"
lastReleaseAt: "2026-04-25T16:50:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["jeffyaw"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1202330554/90bf28a2-72eb-4ee4-b1d2-62d6a4bc65b3"
discussionCount: 0
---

# ctxlint

One click adds this to your local Yaw MCP config so it's available in every Yaw Terminal session. **Tested with Yaw MCP 1.1.13 or newer.** Or install manually below.

**Lint your AI agent context files, MCP server configs, and session data against your actual codebase.** Context linting + MCP config linting + session auditing. 16 AI tools, 8 MCP clients, cross-project consistency, auto-fix. Works as a CLI, CI step, pre-commit hook, or MCP server.

Your `CLAUDE.md` is lying to your agent. Your `.mcp.json` has a hardcoded API key. ctxlint catches both.

## Why ctxlint?

Every AI coding tool ships a context file: `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `.mcp.json`. These files are the single most important interface between you and your agent — they tell it what to build, how to test, where things live.

But context files rot fast. You rename a file, change a build script, or switch from Jest to Vitest — and your `CLAUDE.md` still says the old thing. Your agent follows those stale instructions faithfully, then fails. You lose 10 minutes debugging what turns out to be a wrong path in line 12 of a markdown file.

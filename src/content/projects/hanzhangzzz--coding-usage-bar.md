---
repo: "hanzhangzzz/coding-usage-bar"
name: "coding-usage-bar"
description: "macOS menu bar usage monitor for Claude Code, Codex, GLM, DeepSeek, and MiniMax"
readmeQualityOk: true
url: "https://github.com/hanzhangzzz/coding-usage-bar"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [64, 34]
topics: ["ai-coding", "anthropic", "claude-code", "codex", "macos", "menu-bar", "openai", "swiftbar", "usage-monitor"]
stars: 7
forks: 3
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-07-14T02:57:18Z"
lastCommitAt: "2026-10-15T08:09:38Z"
lastReleaseAt: "2026-08-26T07:38:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 47
maintainers: ["huajuan404", "liuyanghejerry"]
openGraphImageUrl: "https://opengraph.githubassets.com/e61dc858e1a0c08944af8124e7288b7c95ad093c8d8fcde312b3bfa3435e149e/hanzhangzzz/coding-usage-bar"
---

# Coding Usage Bar

[English](https://github.com/hanzhangzzz/coding-usage-bar/blob/HEAD/README.md) · [简体中文](https://github.com/hanzhangzzz/coding-usage-bar/blob/HEAD/README.zh-CN.md)

**Claude Code and Codex usage monitoring in your macOS menu bar.** Track rolling plan limits across Claude Code, OpenAI Codex, GLM (Zhipu AI), DeepSeek, MiniMax, and Kimi (Moonshot AI) before a coding session hits the wall.

Coding Usage Bar does more than display quota percentages. It compares short rolling windows with the weekly budget and labels your pace as learning, under-burning, on track, over-burning, or close to a limit.

Claude Code and Codex data stays local and is read from files those tools already produce. Provider API keys for GLM, DeepSeek, and MiniMax are stored only in `~/.coding-usage-bar/config.json` and sent directly to their respective quota APIs. Kimi reads its key from `~/.coding-usage-bar/config.json` or, when unset, from the kimi.com lane in `~/.config/claude-lanes/config.env`.

## Live SwiftBar Menu

The menu bar title and the dropdown panel are captured from the live SwiftBar plugin and placed on a plain backdrop. The animation reproduces opening and closing that menu…

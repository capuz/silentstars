---
repo: "shehab267/ccbrief"
name: "ccbrief"
description: "A minimal, configurable status line (statusline) for Claude Code. Shows context, tokens, cost and rate limits in your terminal. npm: https://www.npmjs.com/package/ccbrief"
readmeQualityOk: true
url: "https://github.com/shehab267/ccbrief"
homepage: "https://shehab267.github.io/ccbrief/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["claude", "claude-code", "cli", "developer-tools", "nodejs", "status-line", "statusline", "terminal", "claude-code-statusline", "context-window"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-07-07T09:31:18Z"
lastCommitAt: "2026-10-29T12:25:01Z"
lastReleaseAt: "2026-10-29T12:25:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 42
maintainers: ["shehab267", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1292082844/f5dec694-941a-4009-9151-dd419147516e"
---

# ccbrief: a minimal status line for Claude Code

A minimal, configurable status line (statusline) for [Claude Code](https://claude.com/claude-code). It
shows your context window, tokens, session cost and rate-limit usage in your terminal. Install it from
[npm](https://www.npmjs.com/package/ccbrief) with one command: `npx ccbrief init`.

```
ccbrief │ ccbrief/main │ +120/-34 │ 42% ━━━━───── │ 128k │ $1.23 │ ⏳2h 0m · 40% │ wk 3d 4h · 62% │ high │ Opus 5.5
```

> **Not affiliated with, or endorsed by, Anthropic.** ccbrief is an independent, open-source project
> that reads the data Claude Code already provides. It makes no network calls and sends no telemetry.

[Docs website](https://shehab267.github.io/ccbrief/) · [npm](https://www.npmjs.com/package/ccbrief) · [Install](#install) · [Update](#update) · [Uninstall](#uninstall) · [Presets](#presets) · [Configure](#configure) · [Segments](#segments) · [Colors and symbols](#colors-and-symbols) · [FAQ](#faq)

## Install

```sh
npx ccbrief init
```

This copies a self-contained renderer into `~/.claude/ccbrief/`, backs up your `settings.json`, and
adds the `statusLine` block to it. The rest of your settings stay as they are. When it…

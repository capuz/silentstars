---
repo: "wassim-azi/agy-powerline"
name: "agy-powerline"
description: "Fast, configurable statusline for Google Antigravity CLI (agy): live Gemini, Claude/GPT and Argon quota pacing, git, and an interactive TUI configurator"
readmeQualityOk: true
url: "https://github.com/wassim-azi/agy-powerline"
homepage: "https://www.npmjs.com/package/agy-powerline"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["antigravity", "cli", "gemini", "nodejs", "powerline", "statusline", "terminal", "agy", "terminal-ui", "tui"]
stars: 21
forks: 9
openIssues: 11
closedIssues: 51
watchers: 0
contributors: 9
recentReleases: 8
createdAt: "2026-10-11T17:52:17Z"
lastCommitAt: "2026-10-21T20:00:59Z"
lastReleaseAt: "2026-10-19T23:04:26Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 57
maintainers: ["wassim-azi", "dannyward630", "yuefdev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1414619170/0b5ec86e-b0b3-4683-a2fc-02c3b394bfe8"
discussionCount: 1
---

# agy-powerline

**English** | [简体中文](https://github.com/wassim-azi/agy-powerline/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/wassim-azi/agy-powerline/blob/HEAD/README.ja.md) | [Français](https://github.com/wassim-azi/agy-powerline/blob/HEAD/README.fr.md)

**A fast, configurable statusline for Google Antigravity's CLI (`agy`).**

See your model, Gemini 5h/7d, Claude/GPT and Argon quotas, context window, git branch and more at a glance. Pick widgets, themes and layout from an interactive editor. One command to install, no dependencies.

## Install

You need [Node.js](https://nodejs.org/) 20+ and the [Antigravity CLI](https://antigravity.google/docs/cli/overview). Works on Windows, macOS, Linux and WSL ([WSL notes](https://github.com/wassim-azi/agy-powerline/blob/HEAD/docs/install.md#wsl)).

```bash
npx agy-powerline init        # install the statusline into agy
npx agy-powerline configure   # optional: pick widgets, theme and layout
agy                           # start Antigravity
```

On a first install `init` asks for a preset, a layout and a theme, with a preview of each; add `--yes` to skip the questions. It asks before replacing anything and backs up Antigravity's…

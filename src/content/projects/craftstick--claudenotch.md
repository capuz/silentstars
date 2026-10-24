---
repo: "CraftStick/ClaudeNotch"
name: "ClaudeNotch"
description: "Claude Code status in the MacBook notch: live Clawd, hover details, Allow/Deny buttons"
readmeQualityOk: true
url: "https://github.com/CraftStick/ClaudeNotch"
language: "Swift"
languages: ["Swift"]
languagePcts: [93]
topics: ["ai-agents", "claude", "claude-code", "developer-tools", "dynamic-island", "macos", "menu-bar-app", "notch", "swiftui"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T19:07:26Z"
lastCommitAt: "2026-10-24T08:07:42Z"
lastReleaseAt: "2026-10-23T13:27:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["CraftStick"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5874ba144d03bec17b6ca70a5670468d2d4c81805c316ed791704547f9a154d/CraftStick/ClaudeNotch"
---

**English** · [Русский](https://github.com/CraftStick/ClaudeNotch/blob/HEAD/README.ru.md)

# Claude Notch

**[Claude Code](https://claude.com/claude-code) in your MacBook's notch, like the Dynamic Island on an iPhone.**<br>
See what Claude is doing, how long it's been at it and when it needs you, and answer it right there.<br>
And Clawd lives in the notch.

## Install

You need macOS 14 or later and Claude Code, in a terminal or in the Claude app.

1. Download **ClaudeNotch-….dmg** from the [latest release](https://github.com/CraftStick/ClaudeNotch/releases/latest) and open Claude Notch right in it. Apple hasn't notarized it, so the first time macOS won't: click **Done**, then **System Settings → Privacy & Security → Open Anyway**.
2. Click **Move**: it copies itself to Applications and opens from there.
3. When it asks to connect to Claude Code, click **Connect**. It adds its hooks to `~/.claude/settings.json` and keeps the original next to it.

**Or with [Homebrew](https://brew.sh):**

```bash
brew install craftstick/tap/claude-notch
```

Then open Claude Notch from Applications (the first time: **Done**, then **System Settings → Privacy & Security → Open Anyway**) and click…

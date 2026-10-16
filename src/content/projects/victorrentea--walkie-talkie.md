---
repo: "victorrentea/walkie-talkie"
name: "walkie-talkie"
description: "Talk to any coding agent while you look at something else: a macOS overlay that relays Wispr Flow dictation, your selection and screenshots into whatever agent is watching its queue."
readmeQualityOk: true
url: "https://github.com/victorrentea/walkie-talkie"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [66, 27]
topics: ["dictation", "macos", "wispr-flow"]
stars: 7
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T19:59:38Z"
lastCommitAt: "2026-10-16T08:27:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 60
undervaluedScore: 48
maintainers: ["victorrentea"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec5cde5f11f2c635264dd9705dc4c784d0289beb3b97f1ea2ae5c97aaf9e21c0/victorrentea/walkie-talkie"
---

# 📻 Walkie Talkie

**Talk to your coding agent while you look at something else.**

A macOS overlay. You speak, it transcribes, and the prompt lands in your
Claude Code terminal, along with the screenshots, highlighted text and web
elements you pointed at while talking.

## Why

- 👀 **Your eyes stay on the work**: a browser, an IDE, the projector. The terminal can sit behind other windows.
- 🎙️ **You speak instead of typing**, in Romanian, English or both mixed.
- 📸 **Context comes along**: screenshots, highlighted text, elements picked in Chrome.
- ⏱️ **You can still cancel**: every prompt waits a few seconds before it is sent.
- 🛡️ **It never types at a shell prompt**, only into a running agent.

## How it goes

| step | what you see |
|---|---|
| **1. Bind** a terminal running Claude Code: <kbd>⌘⌃B</kbd> | the chip by your cursor names the session |
| **2. Talk**: <kbd>⌘⌃D</kbd> to start, <kbd>⌘⌃D</kbd> again to stop | <img src="docs/readme/listening.png" width="348" alt="Dictating: the session name and one screenshot"> |
| **3. Show it what you mean**: highlight some text… | <img src="docs/readme/listening-selection.png" width="348" alt="A highlighted line rides along"> |…

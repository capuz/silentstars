---
repo: "mnaoumov/obsidian-advanced-debug-mode"
name: "obsidian-advanced-debug-mode"
description: "Obsidian plugin that enhances debugging experience."
readmeQualityOk: true
url: "https://github.com/mnaoumov/obsidian-advanced-debug-mode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["obsidian", "obsidian-plugin", "obsidianmd"]
stars: 35
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-03-24T09:42:34Z"
lastCommitAt: "2026-11-03T19:05:45Z"
lastReleaseAt: "2025-03-27T00:31:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 57
maintainers: ["mnaoumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be5e1557669534166ca4ece9c1d75df642684531a5483aaac0c8e4ea4d998a3/mnaoumov/obsidian-advanced-debug-mode"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mnaoumov"]
discussionCount: 1
---

# Advanced Debug Mode

An error thrown inside a callback or an `await` arrives in the console with most of its stack already gone: you get the frame that threw and almost nothing about who called it. Debugging a plugin in [Obsidian](https://obsidian.md/) then means guessing, or littering the code with logging until the path becomes obvious.

This plugin restores those frames. It keeps long stack traces across callback and `async` boundaries, turns off the timeouts that fire while you sit on a breakpoint, brings DevTools to the mobile app, and gives the `debug` namespaces a UI instead of hand-edited `localStorage`.

## Demo vault

**The documentation is a demo vault.** Every feature has a note that explains what it does and why you would want it, with buttons that throw real errors so you can watch the traces yourself.

**[Start reading here](<./demo-vault/00 Start.md>)** — it is plain markdown, so it works on GitHub with nothing installed.

A copy of the vault ships with every release. You can access it via any of the following:

1. Running the **`Advanced Debug Mode`: Open demo vault** command.
2. Downloading `advanced-debug-mode-demo-vault.zip` from the…

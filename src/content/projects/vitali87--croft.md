---
repo: "vitali87/croft"
name: "croft"
description: "VSCode-style TUI written in Rust https://docs.croft.software"
readmeQualityOk: true
url: "https://github.com/vitali87/croft"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["android", "ghostty", "ide", "iterm2", "linux", "macos", "rust", "vscode", "tui"]
stars: 86
forks: 7
openIssues: 268
closedIssues: 675
watchers: 1
contributors: 5
recentReleases: 7
createdAt: "2026-07-28T13:54:14Z"
lastCommitAt: "2026-10-31T07:47:21Z"
lastReleaseAt: "2026-10-28T00:05:36Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 36
maintainers: ["vitali87", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/346bf6bf5d404eb1b7a95df89010e5b08b1086b4437019b5b7c58630dfcf1170/vitali87/croft"
fundingLinks: ["GITHUB:https://github.com/vitali87", "PATREON:https://patreon.com/vitali87", "BUY_ME_A_COFFEE:https://buymeacoffee.com/vitali87"]
discussionCount: 2
---

# croft

A VS Code style three pane workspace that runs entirely inside your terminal. Written in Rust, shipped as a single static binary.

## Tenets

The non-negotiables behind every decision in croft:

1. **Speed is a must.** Every feature is weighed against its cost on the hot path before it lands.
2. **Low latency is non-negotiable.** Keystrokes and clicks register instantly; rendering is coalesced so a noisy shell can never starve input.
3. **Local and remote parity always binds.** Behaviour on your Mac and on a Linux box over SSH is identical. There is no second-class remote mode.
4. **The gap between terminal and GUI stays minimal.** croft should look and feel like VS Code, down to the icons and motion.
5. **Everything has a shortcut.** Every action is reachable from the keyboard, and no menu item ships without an accelerator.
6. **Correctness beats workarounds.** Bugs are fixed at the root, never papered over with a fallback or a downgrade.
7. **One binary, no ceremony.** Features are emulated in process rather than bolted on, so there is nothing to wire up after you install.

## Layout

Three panes in the VS Code arrangement: an **Explorer sidebar** on the left, a **code…

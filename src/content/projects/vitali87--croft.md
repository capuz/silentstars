---
repo: "vitali87/croft"
name: "croft"
description: "VSCode-style TUI written in Rust https://docs.croft.software"
readmeQualityOk: true
url: "https://github.com/vitali87/croft"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["android", "ghostty", "ide", "iterm2", "linux", "macos", "rust", "vscode", "tui"]
stars: 42
forks: 1
openIssues: 65
closedIssues: 137
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-07-28T13:54:14Z"
lastCommitAt: "2026-08-29T10:20:31Z"
lastReleaseAt: "2026-08-17T23:29:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 40
maintainers: ["vitali87"]
openGraphImageUrl: "https://opengraph.githubassets.com/34b6d354561d6881e4390926f5f5769d84c6055dc397ea6b11778754fc8d5a9a/vitali87/croft"
---

</div>

# croft

A VS Code style three pane workspace that runs entirely inside your terminal. Written in Rust and shipped as a single static binary.

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

Three panes in the VS Code arrangement: an **Explorer sidebar** on the…

---
repo: "felis-terminal/felis"
name: "felis"
description: "A terminal for your toolkit. Not an environment. "
readmeQualityOk: true
url: "https://github.com/felis-terminal/felis"
homepage: "https://git.natsukium.com/felis-terminal/felis"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 8
forks: 0
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-09-26T07:28:57Z"
lastCommitAt: "2026-10-18T08:15:57Z"
lastReleaseAt: "2026-10-14T02:38:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 48
maintainers: ["natsukium"]
openGraphImageUrl: "https://opengraph.githubassets.com/f39ad3d5846a64acef2a9acb803bd6f8ee21f0d01c27ce80f00089c286f848aa/felis-terminal/felis"
---

# felis

A terminal for your toolkit. Not an environment.

felis is a fast, GPU-accelerated terminal that keeps your sessions alive and renders modern protocols with full
fidelity, while leaving layout to your window manager and workflow to your tools.

## What felis owns

- **Sessions outlive windows.** Close the window without killing the shell, a long build, or an agent. Reattach locally
  or over SSH with the grid and scrollback intact in the daemon. Sessions live in memory; you get process persistence
  without the double-emulation layer, protocol degradation, or keybind collisions of tmux.
- **Modern protocol fidelity.** A narrow scope does not mean reduced capabilities. felis implements modern protocols in
  full: Kitty graphics, Kitty text sizing, Kitty keyboard protocol, OSC 8 hyperlinks, OSC 133 prompt marks, East Asian
  width, and ligature font shaping. If a rich TUI runs in Kitty, it runs identically in felis.
- **Engineered for throughput.** Because felis declines tabs, splits, and an embedded scripting runtime, engineering
  focuses strictly on parser dispatch, damage tracking, and GPU rendering. [Performance](#performance) shows where that
  lands against Kitty,…

---
repo: "lassejlv/termy"
name: "termy"
description: "The terminal, at full speed ⚡"
readmeQualityOk: true
url: "https://github.com/lassejlv/termy"
homepage: "https://termy.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["alacritty", "gpui", "rust", "swift", "terminal", "tmux"]
stars: 429
forks: 33
openIssues: 6
closedIssues: 121
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2026-02-12T01:52:06Z"
lastCommitAt: "2026-09-17T08:50:07Z"
lastReleaseAt: "2026-02-20T21:05:51Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 29
maintainers: ["lassejlv", "ktutumi", "Jeppebs02"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c8469ff1b5f4efd16c6d3d21d9d1a7a3a5484f75b16eee02cd88f028b5c24c/lassejlv/termy"
fundingLinks: ["GITHUB:https://github.com/lassejlv"]
discussionCount: 1
---

</p>

</p>

</p>

Termy is a fast, native terminal for macOS, Linux, and Windows. It combines GPU-accelerated rendering with the terminal workflows you use every day—tabs, splits, search, tasks, layouts, themes, and optional tmux sessions—without turning the interface into a control panel.

- Damage-scoped GPU rendering with dirty-span cell caching
- Tabs, splits, search, tasks, and reusable layouts
- Configurable keybindings, colors, themes, and terminal behavior
- Optional tmux control-mode sessions
- Native platform integration with a reusable headless runtime and FFI

## Install

Download the latest build from **[termy.sh/download](https://termy.sh/download)** or browse every artifact on **[GitHub Releases](https://github.com/lassejlv/termy/releases)**.

> [!IMPORTANT]
> macOS builds are not signed yet. After moving Termy to `/Applications`, run:
>
> ```bash
> sudo xattr -d com.apple.quarantine /Applications/Termy.app
> ```
>
> See [macOS troubleshooting](https://termy.sh/docs/getting-started/troubleshooting) if Gatekeeper still prevents Termy from opening.

### Build from source

Termy is a Rust workspace. Build and launch the desktop app with:

```bash
cargo run --release -p…

---
repo: "hongnoul/gwae"
name: "gwae"
description: "gwae: niri's scrolling tiling for your CLI agents, in any terminal (daemon-free, MIT)"
readmeQualityOk: true
url: "https://github.com/hongnoul/gwae"
homepage: "https://hongnoul.github.io/gwae/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["cli-agents", "niri", "rust", "terminal-multiplexer", "tiling-window-manager", "tui", "ai-agents", "claude-code", "conpty", "developer-tools"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-25T05:09:51Z"
lastCommitAt: "2026-08-28T14:31:28Z"
lastReleaseAt: "2026-08-28T14:35:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 58
maintainers: ["hongnoul", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d9de093102612db5f81f77335bcfb0773a845a5cd77986a7b42b524d794c6e/hongnoul/gwae"
discussionCount: 0
---

# gwae

**Run six coding agents side by side. Panes never shrink — the viewport scrolls instead.**

Any terminal, macOS / Linux / Windows. One process, no daemon.

Two agents and a system monitor, each at full width on the strip grid, with placeholder boxes tiling the empty columns. Nothing is sped up.

```bash
curl -fsSL https://raw.githubusercontent.com/hongnoul/gwae/main/scripts/install.sh | bash   # macOS & Linux
brew install hongnoul/tap/gwae                                                             # Homebrew
cargo install gwae                                                                         # Rust 1.85+
```

[Website](https://hongnoul.github.io/gwae/) · [Quick Start](#quick-start) · [Keyboard Shortcuts](#keyboard-shortcuts) · [Why gwae?](#why-gwae) · [FAQ](#faq) · [Docs](https://github.com/hongnoul/gwae/blob/HEAD/docs/)

</div>

---

## Quick start

```sh
gwae                     # one strip, one 1/4-width pane + placeholder boxes
gwae run "claude"        # command runs in column 0, rest are shells ($SHELL)
gwae new -- htop         # (subcommand form) new column in a fresh session
gwae init                # guided setup: theme, layout, chrome (safe to re-run)
gwae…

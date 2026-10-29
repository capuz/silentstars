---
repo: "no-phux/phux"
name: "phux"
description: "work faster than thought "
readmeQualityOk: true
url: "https://github.com/no-phux/phux"
homepage: "https://phux.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["libghostty", "rust", "terminal-multiplexer", "tmux", "ghostty", "agents", "mux", "ai-agents", "coding-agents", "remote"]
stars: 15
forks: 2
openIssues: 38
closedIssues: 60
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-05-25T15:29:31Z"
lastCommitAt: "2026-10-29T21:23:46Z"
lastReleaseAt: "2026-07-27T20:38:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 46
maintainers: ["phall1", "jamesponwith", "phux-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cb1ca2ea3ecc718b624b953409adbe13c9c69e44f99d0c20cf2975332070882/no-phux/phux"
discussionCount: 2
---

# phux

A terminal multiplexer whose server you can drive from code.

phux keeps your shells running in a background server and shows them in a
terminal UI, like tmux. Commands expose panes, input, snapshots, and agent
state with JSON output and exit codes. The server tracks which panes run
a coding agent and whether it is waiting on you. Another machine is one
`phux host add me@mini` away, with no account.

[Docs](https://github.com/no-phux/phux/blob/HEAD/docs/README.md) · [Help](#help) · [Releases](https://github.com/no-phux/phux/releases) ·

## Install

### CLI and terminal UI

```sh
curl -fsSL https://phux.sh/install | sh
```

Or use [Homebrew](https://github.com/no-phux/phux/blob/HEAD/docs/install.md#homebrew). Run `phux` after installing.

### Desktop app

**macOS:** [download the DMG](https://github.com/no-phux/phux/releases?q=desktop-v&expanded=true),
drag **Phux.app** to **Applications**, eject the image, and open Phux.
The app includes the CLI/server and is signed and notarized. Or install with
`brew install --cask no-phux/tap/phux-desktop` ([Homebrew setup](https://github.com/no-phux/phux/blob/HEAD/docs/install.md#macos-homebrew)).
**Linux:** use the [desktop…

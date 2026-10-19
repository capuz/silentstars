---
repo: "joshka/betamax"
name: "betamax"
description: "Rust-first VHS-style terminal capture CLI"
readmeQualityOk: true
url: "https://github.com/joshka/betamax"
homepage: "https://www.joshka.net/betamax/"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
topics: ["cli", "gif", "rust", "terminal", "testing", "terminal-capture"]
stars: 42
forks: 5
openIssues: 12
closedIssues: 8
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-05-06T00:55:19Z"
lastCommitAt: "2026-10-19T09:14:55Z"
lastReleaseAt: "2026-06-15T11:05:01Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 84
undervaluedScore: 52
maintainers: ["joshka", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2c2059cb3339e8431fb093f6efb19e0550596a5d6e566c12ab1b8f765cebf1a/joshka/betamax"
discussionCount: 2
---

# Betamax

Betamax records terminal sessions as GIFs, screenshots, videos, and JSON snapshots for tests.
Write a [VHS](https://github.com/charmbracelet/vhs)-style tape file to run commands, type text,
and wait for output.

Betamax uses `libghostty-vt` to parse terminal output and renders frames in Rust with `cosmic-text`
and `swash`. It does not need a browser or terminal server. VHS's `serve`, `record`, `Source`, and
`publish` features are not implemented.

## Quick start

Betamax currently supports macOS and Linux. Windows is not supported because the upstream
`libghostty-vt-sys` native build does not support Windows.

Install the CLI with Homebrew from [joshka/homebrew-tap][homebrew-tap]:

```sh
brew install joshka/tap/betamax
```

If Homebrew requires trusted taps, trust the formula first:

```sh
brew trust --formula joshka/tap/betamax
```

Or install from crates.io with cargo-binstall:

```sh
cargo binstall betamax
```

If [cargo-binstall][cargo-binstall] is not installed, install it first:

```sh
cargo install cargo-binstall
```

Source installs are mainly for maintainers. Betamax uses the safe `libghostty-vt` Rust wrapper; its
`libghostty-vt-sys` dependency fetches a pinned…

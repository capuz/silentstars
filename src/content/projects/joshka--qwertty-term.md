---
repo: "joshka/qwertty-term"
name: "qwertty-term"
description: "A full Rust rewrite of Ghostty — terminal emulator engine, font stack, Metal renderer, and native macOS app — ported subsystem-by-subsystem from the Zig source (pinned at 2da015cd6) with differential testing against the original as the correctness oracle."
readmeQualityOk: true
url: "https://github.com/joshka/qwertty-term"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 16
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-16T09:21:57Z"
lastCommitAt: "2026-07-13T06:40:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 44
maintainers: ["joshka"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c87bf0064c35a257a557b68f6ac9159f0497998079bef24bd82d091c29b44a5/joshka/qwertty-term"
---

# qwertty-term

A full Rust rewrite of [Ghostty](https://ghostty.org) — terminal emulator engine, font
stack, Metal renderer, and native macOS app — ported subsystem-by-subsystem from the Zig
source (pinned at `2da015cd6`) with differential testing against the original as the
correctness oracle.

Status: **daily-drivable on macOS.** Native AppKit app with tabs, splits (zoom, dimming,
equalize), Cmd+F search, scrollback, IME, kitty + legacy keyboard protocols, mouse
reporting, shell integration, themes, ligatures, Apple Color Emoji, and nerd-font glyph
sizing at parity with upstream. Performance is competitive but not yet optimized:
[vtebench](https://github.com/alacritty/vtebench) puts it ahead of Ghostty 1.3.1 on most
suites but behind current Ghostty `main` (whose recent perf work is substantially faster);
no dedicated perf tuning has happened yet. See `docs/benchmarks/` for the honest numbers.

```sh
cargo run -p qwertty-term --release          # the terminal
cargo run -p frame-capture -- --help        # headless VT-bytes → PNG (embeddability demo)
cargo test --workspace                      # ~1500 engine tests + differential + smokes
```

## Design highlights

-…

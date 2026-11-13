---
repo: "n0ot/lector"
name: "lector"
description: "Lector is a screen reader for Unix-like terminals"
readmeQualityOk: true
url: "https://github.com/n0ot/lector"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 3
closedIssues: 40
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-08-02T00:57:14Z"
lastCommitAt: "2026-11-13T18:35:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 76
maintainers: ["n0ot"]
openGraphImageUrl: "https://opengraph.githubassets.com/50fed31fc66b9ee1d82a60066cf914281b89183c77255bed00c520349f650d22/n0ot/lector"
---

# Lector

Lector is a terminal screen reader. It speaks what appears in your terminal and lets you review what’s on screen without disrupting the running program.

## What Lector does

- Reads new terminal output automatically as it appears.
- Lets you review lines, words, and characters independently of the app cursor.
- Helps navigate tables in terminal output.
- Provides a clipboard history for quick copy/paste.
- Can be customized with a simple Lua config file.

## Get started

Build a release from a fresh clone with the standard Cargo command:

```bash
cargo build --locked --release
```

Run Lector with your shell:

```bash
cargo run -- --shell /bin/zsh
```

Or use the `SHELL` environment variable:

```bash
SHELL=/bin/zsh cargo run
```

In key names, `M-` means Alt (or Option) and `C-` means Control. Lector uses
native speech by default. Press `M-x` to pause or resume speech, `M-r` to
review output, and `F1` to hear what a key does.

The [build guide](https://github.com/n0ot/lector/blob/HEAD/docs/ghostty-builds.md#fresh-clone-developer-build) lists
prerequisites, supported targets, and offline packaging. The
[documentation…

---
repo: "ceejbot/formulaic"
name: "formulaic"
description: "Create homebrew formulas for many kinds of packages."
url: "https://github.com/ceejbot/formulaic"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["formula", "homebrew", "cli", "homebrew-formula", "rust-lang"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-31T20:28:50Z"
lastCommitAt: "2026-06-28T02:01:45Z"
lastReleaseAt: "2026-03-13T04:08:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 40
maintainers: ["ceejbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bccea86704c988fb5fe4b1bdff17829d66734775d1e46fc78ec9200ea4cc7f0/ceejbot/formulaic"
---

# formulaic

`formulaic` generates Homebrew formula files from GitHub release assets. It supports Rust projects via `Cargo.toml` and any project via a `formulaic.toml` manifest. It's designed to run in a GitHub Actions release workflow, but it works just fine locally too.

## Installation

```
brew tap ceejbot/tap
brew install formulaic
```

Or build from source with `cargo build --release`.

## Quick start

1. Export a GitHub token as `GITHUB_ACCESS_TOKEN` or `GITHUB_TOKEN`. It needs _read_ access to the repo you're generating formulas for. Give it _write_ access to your Homebrew tap repo if your workflow updates the tap automatically.

2. Run `formulaic` in your project directory:

```
formulaic [OPTIONS] [MANIFEST]
```

That's it! It writes `{executable}.rb` to the current directory (or wherever `--output-dir` points) and prints the path to stdout. Use `--dry-run` to preview what it would generate.

## Manifest resolution

If you don't pass a manifest path, formulaic looks in the current directory for these files, in order:

1. `.config/formulaic.toml`
2. `.formulaic.toml`
3. `formulaic.toml`
4. `Cargo.toml`

The first one it finds wins.

## Options

| Flag                 |…

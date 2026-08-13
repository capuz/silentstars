---
repo: "pixincreate/KeyWatch"
name: "KeyWatch"
description: "KeyWatch – the vigilant guardian that sniffs out hidden keys and secrets in your code with a wink and a nod."
readmeQualityOk: true
url: "https://github.com/pixincreate/KeyWatch"
homepage: "https://crates.io/crates/key-watch"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["gitguardian", "keywatch", "secret-scanner", "key-watch", "gitleaks", "guardian", "kw", "leak-detection", "secret-scanning"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-02-12T18:43:45Z"
lastCommitAt: "2026-08-13T05:19:22Z"
lastReleaseAt: "2026-08-02T17:52:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 71
maintainers: ["pixincreate", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/384f4cb22a3923d0e09e27fc353bc985f8c19d3787677e1bf34ecb37dade349b/pixincreate/KeyWatch"
---

# KeyWatch

A fast secret scanner for files and directories.

## Install

### Recommended: cargo install

```sh
cargo install key-watch
key-watch --version

# Enable aliases for your current shell session
eval "$(key-watch init bash)"
```

To make aliases persistent, add the init line to your shell config file:

```sh
# bash
echo 'eval "$(key-watch init bash)"' >> ~/.bashrc

# zsh
echo 'eval "$(key-watch init zsh)"' >> ~/.zshrc
```

### Manual install from GitHub Releases

1. Download the correct binary for your OS/architecture from GitHub Releases.
2. Move it to a directory on your `PATH`, for example `~/.local/bin`.
3. Make it executable.
4. Verify it runs.
5. Enable aliases with `init`.

```sh
mkdir -p ~/.local/bin
mv ~/Downloads/key-watch ~/.local/bin/key-watch
chmod +x ~/.local/bin/key-watch
~/.local/bin/key-watch --version

# Enable aliases for current shell session
eval "$(~/.local/bin/key-watch init bash)"
```

Requires Rust 1.85+ (edition 2024) when building from source.

The canonical command is `key-watch`.
`keywatch` and `kw` are optional shell aliases exposed via `key-watch init ...`.

## GitHub Action

Use the root Action from a public workflow. The major tag follows…

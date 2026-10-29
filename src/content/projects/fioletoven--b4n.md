---
repo: "fioletoven/b4n"
name: "b4n"
description: "Terminal user interface (TUI) for Kubernetes API written in Rust"
readmeQualityOk: true
url: "https://github.com/fioletoven/b4n"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["k8s", "k8s-cluster", "kubernetes", "kubernetes-cli", "kubernetes-cluster", "rust", "kube-rs", "ratatui", "k9s"]
stars: 109
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-12-30T22:11:56Z"
lastCommitAt: "2026-10-29T21:23:42Z"
lastReleaseAt: "2025-08-23T19:35:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["fioletoven"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a3f69d2ac3244cb2e97b3d9d256c767f3b66fc95c30265e46af485cabdf539/fioletoven/b4n"
---

# b4n

`b4n` is a terminal user interface (TUI) for the Kubernetes API, created mainly for learning the Rust programming language. It is heavily inspired by the [`k9s` project](https://k9scli.io) and built using the [`kube-rs`](https://kube.rs) and [`ratatui`](https://ratatui.rs) crates.

## Prerequisites

As of version 1.2.0, a font with Nerd Font symbols is no longer required. However, for the best possible user experience, installing one is still recommended.  
This can be the [Cascadia Code font](https://github.com/microsoft/cascadia-code), or any other font with [Nerd Font](https://www.nerdfonts.com/font-downloads) symbols.

Make sure to configure `b4n` according to what your terminal supports, either via the `symbols` command palette action, or directly in the configuration file ([see `config.yaml`](#configyaml)):

```yaml
symbols: nerdfont # use 'plain' or 'powerline' if terminal does not support Nerd Fonts
```

## Installation

### Manual

1. Download the latest release from the [releases page](https://github.com/fioletoven/b4n/releases/latest),
1. Extract the archive and run the binary,
1. On first launch, `b4n` will prompt you to copy the `themes` and `plugins`…

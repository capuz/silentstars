---
repo: "jarjk/rsfilc"
name: "rsfilc"
description: "[mirror] RozsdásFilc: an E-Kréta console client in Rust."
readmeQualityOk: true
url: "https://github.com/jarjk/rsfilc"
homepage: "https://codeberg.org/jark/rsfilc"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "kreta", "kreta-api", "rust"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-03T18:41:53Z"
lastCommitAt: "2026-09-27T09:29:21Z"
lastReleaseAt: "2025-04-07T20:01:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 51
maintainers: ["jarjk"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5b5daee65c60fc97acb7447eff2ddcf27ba67a37905bb8150b0469acc4e3289/jarjk/rsfilc"
---

# [RozsdásFilc](https://codeberg.org/jark/rsfilc): [`E-Kréta`](https://www.e-kreta.hu/) console client in [Rust](https://rust-lang.org)

> `E-Kréta` is an awful Hungarian electronic school administration system

> [Magyar leírás](https://github.com/jarjk/rsfilc/blob/HEAD/README.hu.md)

## Installation

-   EZ mode: grab a prebuilt binary from [releases](https://codeberg.org/jark/rsfilc/releases/latest)

if not available for your platform ([file an issue](https://codeberg.org/jark/rsfilc/issues/new)), not a preferred method or feels a bit outdated:

-   [Rust](https://rustup.rs)
-   `cargo install --locked rsfilc`
>   for latest, beta builds: `cargo install --locked --git "https://codeberg.org/jark/rsfilc"`

### Shell completions:

   <details>
   <summary>Bash</summary>

> Add this to the <ins>**end**</ins> of your config file (usually `~/.bashrc`):
>
> ```sh
> eval "$(rsfilc completions bash)"
> ```

   </details>

   <details>
   <summary>Zsh</summary>

> Add this to the <ins>**end**</ins> of your config file (usually `~/.zshrc`):
>
> ```sh
> eval "$(rsfilc completions zsh)"
> ```
>
> For completions to work, the above line must be added _after_ `compcompletions` is
> called.…

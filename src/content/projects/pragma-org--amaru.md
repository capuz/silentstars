---
repo: "pragma-org/amaru"
name: "amaru"
description: "A fully open source node client for Cardano, written in Rust"
url: "https://github.com/pragma-org/amaru"
homepage: "https://amaru.global"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["cardano", "cardano-node", "sdk"]
stars: 103
forks: 27
openIssues: 86
closedIssues: 123
watchers: 6
contributors: 32
recentReleases: 3
createdAt: "2024-03-21T12:15:35Z"
lastCommitAt: "2026-06-27T06:23:07Z"
lastReleaseAt: "2026-06-25T15:13:38Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 91
undervaluedScore: 52
maintainers: ["yHSJ", "KtorZ", "jonathanlim222"]
openGraphImageUrl: "https://opengraph.githubassets.com/6308960da585cf75c0a724275c6e8ba3a2a77f479ec1473f2693515e1980e315/pragma-org/amaru"
discussionCount: 40
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://amaru.global/_astro/logo-dark.De0RyNtz.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://amaru.global/_astro/logo-light.C5lipD4m.svg">
  </picture>
  <hr />
    <h2 align="center" style="border-bottom: none">A Cardano node client written in Rust.</h2>

  <hr/>
</div>

## Getting Started

> [!WARNING]
>
> Amaru is still in an exploratory phase. Our development strategy favors early
> integration of components, so that progress is instantly visible, even though
> features might be limited or incomplete.

### Installing

#### Docker Image

```console
docker pull ghcr.io/pragma-org/amaru:v10.10.20260625
```

> [!IMPORTANT]
> The tag `:latest` refers to the latest _nightly build_; not the latest release.

#### Homebrew (macOS & Linux)

```console
brew tap pragma-org/amaru https://github.com/pragma-org/amaru && brew trust --tap pragma-org/amaru
brew install amaru
```

#### Nix (macOS & Linux)

```console
nix profile install --no-write-lock-file github:pragma-org/amaru#amaru
```

#### Debian

```console
VERSION=10.10.20260625 ARCH=x86_64; curl -fsSL -o amaru-$VERSION-linux-$ARCH.deb…

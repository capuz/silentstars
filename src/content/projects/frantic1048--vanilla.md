---
repo: "frantic1048/Vanilla"
name: "Vanilla"
description: "frantic1048's grimoire"
readmeQualityOk: true
url: "https://github.com/frantic1048/Vanilla"
language: "Nushell"
languages: ["Nushell", "Nickel"]
languagePcts: [45, 24]
topics: ["dotfile", "swaywm", "i3wm", "waybar", "conky", "elvish", "git", "vscode", "archlinux", "macos"]
stars: 25
forks: 2
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2015-07-12T09:50:47Z"
lastCommitAt: "2026-11-02T13:38:22Z"
lastReleaseAt: "2026-09-14T14:16:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 67
maintainers: ["frantic1048", "renovate[bot]", "houki-san[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b53b5765f6eb9ced8665473ae3b93295c8fc1cd64812004d297d5b005a2d5/frantic1048/Vanilla"
---

# 𝒱𝒶𝓃𝒾𝓁𝓁𝒶

frantic1048's daily configs, scripts etc. Managed by [blend](https://github.com/frantic1048/blend).

## Screenshots

_Sway_:

_i3_:

_macOS_:

## Contents

This repository mainly contains configs for various tools and applications shown in the table below.

Configs are defined as [DSL](https://github.com/frantic1048/Vanilla/blob/HEAD/orders/order.contract.ncl) in [Nickel](https://github.com/nickel-lang/nickel) language under [orders/](https://github.com/frantic1048/Vanilla/blob/HEAD/orders/). They are deployed with the standalone [blend CLI](https://github.com/frantic1048/blend).

## Usage

### Using standalone order(s)

Require a stable `blend` executable in `PATH`. Vanilla does not install or pin
the local CLI; Orders CI independently pins a released container image and
digest.

```sh
# interactively deploy specific order(s)
just sync [order1] [order2] ...

# interactively sync all available orders
just sync
```

### bootstrap script

> [!CAUTION]
> The bootstrap script is intended for fresh systems only. It will install
> various tools and deploy all orders in this repository.
> Do not run it if you already have a working environment.

#### macOS / Arch Linux…

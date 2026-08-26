---
repo: "eljangus/nixos"
name: "nixos"
description: "My NixOS Dotfiles and setup"
readmeQualityOk: true
url: "https://github.com/eljangus/nixos"
language: "Nix"
languages: ["Nix"]
languagePcts: [85]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-04T20:36:24Z"
lastCommitAt: "2026-08-26T04:17:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["eljangus"]
openGraphImageUrl: "https://opengraph.githubassets.com/b79f8572f8016647a8c39f5ebeb394527967046fcb9cdde10cd9776c526f5cfc/eljangus/nixos"
---

# ❄️ nixos

**My personal NixOS/Nix-Darwin setup with support for multiple hosts.**

Application dotfiles (niri, noctalia, fastfetch, kitty) are managed
declaratively using home-manager.

## ❄️ NixOS · Niri · Noctalia

**The NNN stack**, running on `wc` and my main setup.

 

## 🍏 Nix-Darwin

**MacOS running OmniWM and Nix-Darwin, my university and productivity setup.**

</div>

---

## 🖥️ Hosts

3 build the same machine, **`Apollo`**, with a different desktop and user bolted
on top:

|  Host   |   User    | Desktop  |                Purpose                 |
| :-----: | :-------: | :------: | :------------------------------------: |
|  `wc`   |  `elias`  |   Niri   |              Daily driver              |
|  `kde`  | `kdelias` | Plasma 6 | For when I want a customizable desktop |
| `gnome` | `gelias`  |  GNOME   |  For when I want a good desktop OOTB   |

And 1 builds on my MacBook Pro, **`Mac`**, with MacOS running OmniWM:

| Host  |  User   | Desktop |              Purpose               |
| :---: | :-----: | :-----: | :--------------------------------: |
| `mac` | `elias` | OmniWM  | Productivity device for University |

```bash
nh os switch .#wc      # niri
nh os switch…

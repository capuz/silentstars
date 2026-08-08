---
repo: "edmundmiller/dotfiles"
name: "dotfiles"
description: "For keeping all my Dotfiles update to date"
readmeQualityOk: true
url: "https://github.com/edmundmiller/dotfiles"
language: "TypeScript"
languages: ["TypeScript", "Nix"]
languagePcts: [21, 20]
topics: ["dotfiles", "zsh", "emacs", "vim", "nixos-configuration", "nixos", "nix-dotfiles", "herdr-plugin"]
stars: 78
forks: 6
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2017-05-19T21:26:29Z"
lastCommitAt: "2026-08-08T04:36:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 43
maintainers: ["edmundmiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2bf32321153cf01e01a7dc2c3e2724d92fb68aec86a20835bb6faa62f137a54/edmundmiller/dotfiles"
---

</div>

**Hey,** you. You're finally awake. You were trying to configure your OS declaratively, right? Walked right into that NixOS ambush, same as us, and those dotfiles over there.

> **Good news, traveler!** These dotfiles now work on both NixOS and macOS. One config to rule them all, and in the darkness bind them.

```sh
# Quick taste of what you're in for:
nix run nix-darwin -- switch --flake ~/.config/dotfiles  # macOS
nixos-rebuild switch --flake .#hostname                   # NixOS
```

---

|                |                                                           |
| -------------- | --------------------------------------------------------- |
| **Shell:**     | zsh + a bunch of Nix magic                                |
| **DM:**        | lightdm + lightdm-mini-greeter                            |
| **WM:**        | bspwm + polybar (Linux) / Aerospace (macOS)               |
| **Editor:**    | [Doom Emacs][doom-emacs] (and nvim when Emacs is napping) |
| **Terminal:**  | st (Linux) / Ghostty (macOS)                              |
| **Launcher:**  | rofi (Linux) / Raycast (macOS)                            |
| **Browser:**   | firefox / Zen Browser / Orion (I collect…

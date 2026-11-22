---
repo: "canta-9142/nixos-config"
name: "nixos-config"
description: "My NixOS configurations."
readmeQualityOk: true
url: "https://github.com/canta-9142/nixos-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T08:06:22Z"
lastCommitAt: "2026-11-22T02:01:49Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 46
maintainers: ["canta-9142"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aba0e39ecde58dd926e4df580df8e0bc102783535f9f6f22831dac5abf0832b/canta-9142/nixos-config"
---

# nixos-config
NixOS and Home Manager configuration for the `nixos` laptop.
The ROCK 3B configuration is maintained separately in `servers-config`.

## Desktop

Niri and Umbriel are available as separate SDDM sessions. After activating the
configuration, log out and select **Umbriel** in SDDM to try it; select **Niri**
to return. Both sessions use the same Noctalia settings and Hyprlock/Hypridle.

Umbriel starts with a scrolling layout and mirrors Niri's main shortcuts,
monitor positions, keyboard and touchpad settings. Its additional shortcuts are:

- `Super+L`: cycle scrolling, dwindle, master and stacking layouts.
- `Super+Shift+Space`: move the focused window to the scratchpad.
- `Super+Ctrl+Space`: show or hide the scratchpad.
- `Super+Ctrl+Shift+Space`: restore a scratchpad window to its workspace.

`Super+Alt+L` locks the session, `Super+Shift+E` asks to log out, and `Print`
uses Noctalia's region screenshot tool. Umbriel's configuration lives in
`modules/home/desktop/umbriel/default.nix`. GUI behavior, input methods, remote
access and suspend/resume should be checked in the actual Umbriel session.

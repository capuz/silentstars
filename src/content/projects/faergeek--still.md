---
repo: "faergeek/still"
name: "still"
description: "Freeze the screen of a Wayland compositor until a provided command exits"
readmeQualityOk: true
url: "https://github.com/faergeek/still"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["freeze", "screenshot", "wayland", "wlroots", "hyprland"]
stars: 26
forks: 0
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-10-01T05:36:18Z"
lastCommitAt: "2026-09-19T01:37:55Z"
lastReleaseAt: "2026-08-12T15:25:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["faergeek", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/655d774bdd9f7bf1bc9e0b2e9e7ed41f18f2c4c14c06ca2387db2570fdc12eb7/faergeek/still"
---

# still

Freeze the screen of a Wayland compositor until a provided command exits.

> [!IMPORTANT]
> Make sure the command you provide gives you a way to quit in case it takes
> over the keyboard input. If keyboard input is not taken over and you just run
> it from the terminal you can still hit `Ctrl+C` as `still` just lets all
> input to be passed through.

Works great with [grim](https://gitlab.freedesktop.org/emersion/grim) and
[slurp](https://github.com/emersion/slurp):

```sh
still -c 'slurp | grim -g- -'
```

As well as with [swappy](https://github.com/jtheoof/swappy) if you want to
annotate your screenshot right away:

```sh
still -c 'slurp | grim -g- -' | swappy -f -
```

Add `-p` if you want to include a cursor (or **p**ointer) on a frozen
screenshot:

```sh
still -p -c 'slurp | grim -g- -' | swappy -f -
```

## Installation

### Arch Linux

There's an [AUR package](https://aur.archlinux.org/packages/still).

### Building from source

#### Install dependencies

Dependencies:

- meson
- libwayland-client
- wayland-protocols
- pixman

##### Arch Linux

```sh
sudo pacman -S meson pixman wayland wayland-protocols
```

##### Debian/Ubuntu

```sh
sudo apt-get install meson…

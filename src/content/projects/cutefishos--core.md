---
repo: "cutefishos/core"
name: "core"
description: "System components and backend."
readmeQualityOk: true
url: "https://github.com/cutefishos/core"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 269
forks: 38
openIssues: 34
closedIssues: 6
watchers: 15
contributors: 69
recentReleases: 0
createdAt: "2021-03-16T03:24:19Z"
lastCommitAt: "2026-08-30T09:22:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 18
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e20e86786f6167ecb1cb7f895b2e0aceeeacbf8f655db0f191ffe23fd2e929f/cutefishos/core"
---

# Core

System backend and start session and more.

## Compile dependencies

```shell
sudo pacman -S extra-cmake-modules pkgconf qt5-base qt5-quickcontrols2 qt5-x11extras qt5-tools\
    kwindowsystem polkit polkit-qt5 xorg-server-devel xf86-input-libinput xf86-input-synaptics
```

For Ubuntu:
```shell
sudo apt install libpolkit-agent-1-dev libpolkit-qt5-1-dev libsm-dev libxtst-dev\
    libxcb-randr0-dev libxcb-shape0-dev libxcb-xfixes0-dev libxcb-composite0-dev libxcb-damage0-dev libxcb-image0-dev libxcb-util0-dev libkf5idletime-dev
```
(Yes it's annoying that so many xcb's packages here is needed to install. Isn't there a way to install one package and these `libxcb`s all get ready?)

For Debian:
```shell
sudo apt install extra-cmake-modules pkg-config xserver-xorg-input-libinput-dev libx11-xcb-dev libxcb1-dev libxcb-randr0-dev\
    libxcb-keysyms1-dev libxcursor-dev libxcb-xfixes0-dev libxcb-damage0-dev libxcb-composite0-dev libxcb-shm0-dev libxcb-util-dev\
    libxcb-image0-dev libxcb-dpms0-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-ewmh-dev libxcb-glx0-dev libxcb-record0-dev xserver-xorg-dev\
    xserver-xorg-input-synaptics-dev libxtst-dev libsm-dev libpolkit-qt5-1-dev…

---
repo: "CaptSilver/wallpaper-engine-kde-plugin"
name: "wallpaper-engine-kde-plugin"
description: "Cool Wallpaper for KDE/Plasma!"
readmeQualityOk: true
url: "https://github.com/CaptSilver/wallpaper-engine-kde-plugin"
language: "QML"
languages: ["QML", "C++"]
languagePcts: [44, 38]
topics: ["desktop", "kde", "kde-plasma", "linux", "linux-desktop", "wallpaper-engine-plugin", "wallpaper-engine-tools"]
stars: 47
forks: 6
openIssues: 3
closedIssues: 14
watchers: 3
contributors: 42
recentReleases: 1
createdAt: "2026-03-01T00:00:03Z"
lastCommitAt: "2026-09-18T14:03:56Z"
lastReleaseAt: "2026-07-12T02:50:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 40
maintainers: ["CaptSilver", "cyberg0d", "hshari"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3551036521fcccf3c7460fab98e6a4cbac5ffec9e7f13c12c35a530e8c2c403/CaptSilver/wallpaper-engine-kde-plugin"
---

# Wallpaper Engine for KDE

Live wallpapers from [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine), running natively in KDE Plasma 6. Scene, Web, and Video wallpapers all work, drawn by a custom Vulkan renderer — no emulation, no Windows code involved.

This is the actively maintained continuation of the original [catsout](https://github.com/catsout/wallpaper-engine-kde-plugin) plugin, rebuilt for Plasma 6 and Qt 6 with the old Python dependency gone for good.

📖 **Full documentation lives in the [Wiki](https://github.com/CaptSilver/wallpaper-engine-kde-plugin/wiki).** This README is just enough to get you running.

## Install

**Arch (AUR)** — the easy path:

```sh
yay -S wallpaper-engine-kde-plugin-new-fork
```

**Fedora / Bazzite / rpm-ostree** — grab the RPM from [Releases](https://github.com/CaptSilver/wallpaper-engine-kde-plugin/releases):

```sh
sudo dnf install ./wallpaper-engine-kde-plugin-qt6-*.rpm    # Fedora
rpm-ostree install ./wallpaper-engine-kde-plugin-qt6-*.rpm  # Bazzite / Silverblue
```

**Ubuntu / Debian** — grab the `.deb` from [Releases](https://github.com/CaptSilver/wallpaper-engine-kde-plugin/releases). You'll need Ubuntu…

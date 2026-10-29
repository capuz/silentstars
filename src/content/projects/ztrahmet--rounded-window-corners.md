---
repo: "ztrahmet/rounded-window-corners"
name: "rounded-window-corners"
description: "GNOME Shell extension that rounds every window to match libadwaita, using your live GTK theme. Nothing to configure."
readmeQualityOk: true
url: "https://github.com/ztrahmet/rounded-window-corners"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["adwaita", "gjs", "gnome", "gnome-extension", "gnome-shell", "gnome-shell-extension", "gtk", "gtk3", "libadwaita", "linux"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-30T22:24:15Z"
lastCommitAt: "2026-10-29T10:14:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 44
maintainers: ["ztrahmet"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e979bd3f5a64f53c1842c98ad69b01c3cab5a441ed627dedd4529b6c36ba816/ztrahmet/rounded-window-corners"
---

# Rounded Window Corners Native

Rounds every window to match libadwaita. Nothing to configure.

GNOME only rounds apps built with libadwaita. GTK3, Qt, Electron, Java and most terminals
stay square. This extension gives them the same corners, hairline outline and shadow that
libadwaita draws, so every window looks like it belongs.

In the shots above, NVIDIA Settings and the GTK3 demo are GTK3, IntelliJ IDEA is Java and
draws its own window decorations, and Chromium is bottom right. All four are rounded by
this extension.

Requires GNOME Shell 51.

## How it behaves

**Like libadwaita.** The radius, outline and shadow come from libadwaita's own stylesheet,
so light, dark and high contrast follow on their own.

**Your gtk.css counts.** Change the window radius or outline in
`~/.config/gtk-4.0/gtk.css`, even to your accent color, and the other windows follow your
libadwaita apps, live. Your GTK theme is ignored, because libadwaita ignores it too.

**Patches nothing.** No GNOME Shell method is overridden, so there is nothing to fight
with your dock or tiling extension.

## Recommended themes

[adw-gtk3](https://github.com/lassekongo83/adw-gtk3) for GTK3 apps, or…

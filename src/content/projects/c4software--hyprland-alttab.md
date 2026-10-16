---
repo: "c4software/hyprland-alttab"
name: "hyprland-alttab"
description: "Alt+Tab window switcher for Hyprland using a GTK4 layer-shell overlay. App icons, Omarchy theme colors, single-command daemon. Available in Rust (release binary) and Python."
readmeQualityOk: true
url: "https://github.com/c4software/hyprland-alttab"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [54, 24]
topics: ["alt-tab", "gtk4", "hyprland", "omarchy", "python", "rust", "wayland", "window-switcher"]
stars: 11
forks: 5
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-02T17:53:53Z"
lastCommitAt: "2026-10-16T08:26:31Z"
lastReleaseAt: "2026-08-15T19:25:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 48
undervaluedScore: 27
maintainers: ["c4software"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb551595e0e9ef07e1cebc64bbc8da7c348dbe17e4124e2281823133865c94d/c4software/hyprland-alttab"
---

# hyprland-alttab

A visual **Alt+Tab window switcher** for the [Hyprland](https://hyprland.org/) Wayland compositor.

The recommended implementation is an **[Omarchy](https://omarchy.org/) shell plugin** (QML,
hosted by the `omarchy-shell` Quickshell process). Two legacy standalone implementations —
a **Rust** GTK4 binary and a **Python** prototype — are kept in the repo.

```
omarchy-plugin/   Omarchy shell plugin (QML) — recommended
rust/             Legacy standalone GTK4 binary
python/           Legacy prototype
```

## Features

- 🪟 **Visual switcher** on the layer-shell `Overlay` layer with exclusive keyboard focus
- 🗂️ **Grouped by workspace** (active first), sorted by recency (`focusHistoryID`), pinned windows excluded
- 🖼️ **App icons** resolved from `.desktop` files (id variants, `StartupWMClass`, title match for Chrome PWAs)
- 🎨 **Theme-aware** — follows the active Omarchy theme automatically
- ⌨️ Tab/Right → next, Shift+Tab/Left → previous, Return → activate, Escape → cancel,
  releasing ALT/SUPER → activate; hover selects, click activates
- 🫀 Stays open while ALT or SUPER is physically held (verified via `hl.is_key_down` when no
  keyboard event reaches the…

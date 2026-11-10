---
repo: "singularityos-lab/libsingularity"
name: "libsingularity"
description: "A GTK4 application and widget framework for the Singularity Desktop Environment."
readmeQualityOk: true
url: "https://github.com/singularityos-lab/libsingularity"
language: "Vala"
languages: ["Vala"]
languagePcts: [76]
topics: ["gtk-ui", "gtk4", "gtk-library", "libsingularity", "vala", "vala-lang"]
stars: 25
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-04-05T18:11:48Z"
lastCommitAt: "2026-11-10T11:39:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["mirkobrombin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bf633ff1564a0cc0ac3e985946cfc64ba96f7d389b7f17d7028c8eff022dd34/singularityos-lab/libsingularity"
---

# libsingularity

> [!IMPORTANT]
> Report bugs and request features in the
> [Singularity Desktop tracker](https://github.com/singularityos-lab/singularity-desktop/issues/new/choose).

A GTK4 application and widget framework for the [Singularity Desktop Environment](https://github.com/singularityos-lab).

This project ships two libraries from one source tree:

| Library | pkg-config | Contains | Depends on |
|---|---|---|---|
| `libsingularity` | `singularity-1.0` | GTK4 UI toolkit: widgets, windows, dialogs, editor, style/theme, plus pure UI helpers (`ColorUtil`, `TilingLayout`, `GridLayout`, `HotCornerLogic`) | gtk4, optional gtk4-layer-shell, gee, json-glib, libpeas, libsoup, gtksourceview |
| `libsingularity-system` | `singularity-system-1.0` | Headless system backends (no GTK): bluetooth, audio, power, brightness, network, datetime, locale, accounts, gamemode, night light, call monitor, now-playing, session, resource monitor, app-menu registrar, plus helpers (`TimezoneUtil`, `InputSourceUtil`, `AutostartManager`, `HardwareInfo`) | gio, gio-unix, gee, libpulse, gudev, upower-glib, libnm, libsoup |

Both share the `Singularity` namespace. An app links only what it needs: a text…

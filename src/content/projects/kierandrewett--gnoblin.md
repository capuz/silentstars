---
repo: "kierandrewett/gnoblin"
name: "gnoblin"
description: "A no-frills Mutter-based compositor with layer-shell and more."
readmeQualityOk: true
url: "https://github.com/kierandrewett/gnoblin"
homepage: "https://gnoblin.org/"
language: "C"
languages: ["C", "Python"]
languagePcts: [57, 23]
topics: ["barebones", "desktop", "gnome", "gnome-desktop", "gnome-shell", "gtk", "gtk4", "linux", "lua", "mutter"]
stars: 5
forks: 1
openIssues: 51
closedIssues: 131
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-22T23:12:33Z"
lastCommitAt: "2026-11-02T11:36:33Z"
lastReleaseAt: "2026-10-05T07:59:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 67
maintainers: ["kierandrewett"]
openGraphImageUrl: "https://opengraph.githubassets.com/45da6614e88998a45ff98bbc61997a99e8de46915427f7c4d7091fd591a2a5b6/kierandrewett/gnoblin"
---

# Gnoblin

A standalone Mutter-based compositor and session runtime.

[Documentation](https://gnoblin.org/) · [Install](https://github.com/kierandrewett/gnoblin/blob/HEAD/docs/installation.md) · [Choose a shell](https://github.com/kierandrewett/gnoblin/blob/HEAD/docs/bring-your-own-shell.md) · [Configure](https://github.com/kierandrewett/gnoblin/blob/HEAD/docs/config.md) · [Protocols](#supported-protocols) · [Contribute](https://github.com/kierandrewett/gnoblin/blob/HEAD/CONTRIBUTING.md)

Gnoblin provides window management and Wayland interfaces for an external
desktop shell such as [Bingux](https://github.com/kierandrewett/bingux), or a
setup built from Waybar and other layer-shell clients.

Gnoblin is built on Mutter. It does not ship a desktop shell UI.

## Features

- **Bring your own chrome.** Use [Bingux](https://github.com/kierandrewett/bingux),
  [Waybar](https://github.com/Alexays/Waybar) or another layer-shell client
  for the bar, dock, launcher and notifications. Gnoblin does not impose a
  replacement desktop shell.
- **Layer-shell first.** `zwlr_layer_shell_v1` version 5 supports panels,
  docks, wallpapers, launchers and overlays, including layer popups and…

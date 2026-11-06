---
repo: "Unmade760/orbit-global-menu"
name: "orbit-global-menu"
description: "A menu bar for GNOME. The focused application's menus in the top panel."
readmeQualityOk: true
url: "https://github.com/Unmade760/orbit-global-menu"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 31]
stars: 152
forks: 4
openIssues: 2
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-26T04:40:36Z"
lastCommitAt: "2026-11-06T12:17:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 28
maintainers: ["Unmade760", "danyyok"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dcd1a44b65f390629915050e6cc78faa925d17a978514bb0146561e4e360688/Unmade760/orbit-global-menu"
---

# Orbit Global Menu

A menu bar for GNOME. The focused application's menus move out of its window
and into the top panel.

GNOME has no global menu, and most applications no longer export one, so the
extension falls back twice before giving up:

1. Applications that publish a menu over D-Bus get their real one, with
   working checkmarks and greyed-out items. A companion daemon called
   `global-menu` reads it and sends it to the extension as JSON.
2. For 292 applications that publish nothing, the extension ships a menu built
   from the app's documented keyboard shortcuts. Clicking an item sends that
   key combination to the window. This is how an Electron app gets a menu bar
   on Wayland unless you switch on its own export (see
   [docs/enabling-menus.md](https://github.com/Unmade760/orbit-global-menu/blob/HEAD/docs/enabling-menus.md)).
3. Everything else gets window, workspace and session actions, so the bar is
   never empty.

Steps 2 and 3 need nothing but GNOME Shell. Step 1 is the only part with
dependencies, and it is optional.

## Installing the extension

Needs GNOME Shell 48 to 51. Wayland on every version; Xorg only on 48 (Debian 13).
Nothing else.

```sh
git clone…

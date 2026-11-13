---
repo: "d101c/accent-hold"
name: "accent-hold"
description: "Type accented characters the macOS way on GNOME — shortcut → base letter → pick a variant (é è ê ç ô …), inserted anywhere incl. terminal. Pure Shell extension, no daemon/root."
readmeQualityOk: true
url: "https://github.com/d101c/accent-hold"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [58, 23]
topics: ["accents", "gnome", "gnome-extension", "gnome-shell-extension", "keyboard", "linux", "wayland"]
stars: 12
forks: 4
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-06-21T18:19:00Z"
lastCommitAt: "2026-11-13T18:36:12Z"
lastReleaseAt: "2026-11-13T18:37:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 53
maintainers: ["d101c", "keelhauler95"]
openGraphImageUrl: "https://opengraph.githubassets.com/b03453c0160b2c78f68478d5cf79ccf4c468ffcb25c03c31c8266180872789ef/d101c/accent-hold"
---

# Accent Hold

*Read this in another language: [Français](https://github.com/d101c/accent-hold/blob/HEAD/README.fr.md)*

> **Type accented and special characters by holding the letter.**
> Hold `e`, `a`, `c`, `o`, `n` … and its accented variants (`é è ê ë`, `ç`, `ñ`,
> `ô` …) appear in a small popup; tap the letter and it types normally.
> A shortcut (`Super+E`) opens the same picker without holding. Pure GNOME
> Shell extension (Wayland): no daemon, no privileges, no dependencies,
> one-click install from extensions.gnome.org.

## Usage

**Press and hold** (text fields, editors, terminals):

1. hold a letter: `e`, `a`, `c`, `o`, `u`, `n`, `s`, `i`, `y`, `z`
2. pick the variant: `1`–`9` (by key position, so it works on AZERTY,
   QWERTZ …), or move with `←`/`→` and press `Enter`, or click.

`Enter` picks the highlighted variant (the first one until you move).
Anything else keeps the plain letter: `Esc`, `Space`, or just typing on.
`E` (with Shift) offers `É È Ê Ë …`.

**Ways to pick a variant.** The default is the macOS one: the variants stay
open after you let go of the letter, and `Enter`, a number or a click picks.
Other ways are options in the preferences, off by default, so…

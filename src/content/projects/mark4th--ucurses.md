---
repo: "mark4th/uCurses"
name: "uCurses"
description: "micro curses library"
url: "https://github.com/mark4th/uCurses"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2019-09-03T22:52:53Z"
lastCommitAt: "2026-06-26T23:41:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 57
maintainers: ["mark4th"]
openGraphImageUrl: "https://opengraph.githubassets.com/c968547d8685398260e1aaeefc7da6ed8077170d7a98a1fcd51e806ba1f61aba/mark4th/uCurses"
---

# uCurses — micro-sized curses for Linux virtual terminals

uCurses is a compact C library for building terminal user interfaces on
Linux.  It is not a replacement for ncurses — it is a focused alternative
for developers who need a capable TUI on systems where size matters, such
as embedded Linux targets.

At the time of writing, the full library builds in about two seconds and
weighs in around 87 kB.  ncurses is roughly 4.3 MB and takes several
minutes to compile.  On a resource-constrained target the difference is
significant.

---

## Features

- **Moveable, overlapping windows** — windows are independent objects that
  can be repositioned at runtime and drawn in any order.
- **Full-colour text** — 256-colour palette, 24-bit RGB, and greyscale
  attributes per cell, plus bold, underline, and reverse.
- **UTF-8 and Braille** — native UTF-8 codepoint support throughout;
  Braille rendering utilities included.
- **Keyboard and mouse input** — escape-sequence matching via the terminfo
  database, stable internal key codes, screen-level shortcuts, and mouse
  events delivered to focused windows and widgets.
- **Menu system** — menu bar with pull-down menus, modifier-capable…

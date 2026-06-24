---
repo: "crystallabs/crysterm"
name: "crysterm"
description: "Console / terminal GUI toolkit for Crystal."
url: "https://github.com/crystallabs/crysterm"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
topics: ["terminal-based", "terminal-graphics", "console-application", "tui", "cli", "crystal-lang", "crystal"]
stars: 147
forks: 10
openIssues: 0
closedIssues: 27
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2019-10-24T21:50:18Z"
lastCommitAt: "2026-06-24T00:22:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 44
maintainers: ["docelic"]
openGraphImageUrl: "https://opengraph.githubassets.com/675a079950624123885195e335712be6308884d83db17020d0c54fe0edc432c3/crystallabs/crysterm"
---

Crysterm is a console/terminal toolkit for Crystal, inspired by 
[Blessed](https://github.com/chjj/blessed), [Blessed-contrib](https://github.com/yaronn/blessed-contrib), and
[Qt](https://doc.qt.io/).

Advanced features:

Image-rendering backends:

Image::Tek (Tektronix 4014):

## Tech intro

Crysterm is supported by the event model in 
[event_handler](https://github.com/crystallabs/event_handler), color routines in
[term_colors](https://github.com/crystallabs/term_colors), terminal handling in
[tput.cr](https://github.com/crystallabs/tput.cr), GPM mouse in
[gpm.cr](https://github.com/crystallabs/gpm.cr), a terminfo library in
[unibilium.cr](https://github.com/crystallabs/unibilium.cr), and an animated PNG/GIF parser
in [pnggif](https://github.com/crystallabs/pnggif).

[tput.cr](https://github.com/crystallabs/tput.cr) implements all the terminal routines, and
does not use ncurses. For terminfo bindings it uses [unibilium](https://github.com/neovim/unibilium/),
but it also supports a built-in, standard mode which does not use terminfo at all.
(A lot of modern software just hardcodes the sequences.)
The other important module at Crysterm's core is…

---
repo: "kazu-yamamoto/Firemacs"
name: "Firemacs"
description: "An extension to add Emacs's editing features to Firefox"
readmeQualityOk: true
url: "https://github.com/kazu-yamamoto/Firemacs"
homepage: "http://www.mew.org/~kazu/proj/firemacs/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [64, 29]
stars: 108
forks: 12
openIssues: 18
closedIssues: 12
watchers: 12
contributors: 6
recentReleases: 0
createdAt: "2010-01-06T03:15:02Z"
lastCommitAt: "2026-10-17T07:58:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 29
maintainers: ["kazu-yamamoto"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b4170286710ee924c4a29cdfa97e034af2d2d3be43c82ba7fbfd88b30093a30/kazu-yamamoto/Firemacs"
---

# Firemacs

Emacs keybindings for Firefox: Emacs editing in text fields, and
Emacs/vi-like scrolling and tab switching elsewhere.

Firemacs is now a WebExtension, in [`webext/`](https://github.com/kazu-yamamoto/Firemacs/blob/HEAD/webext/). It runs on
Firefox 140 and later (tested with Firefox 156 on macOS, Windows 11 and
Ubuntu 24.04).

The manual is on [mew.org](https://www.mew.org/~kazu/proj/firemacs/en/).

The rest of this repository (`chrome/`, `components/`, `install.rdf`) is the
original XUL extension for Firefox 30 and earlier. It does not run on
Firefox 57 and later and is kept for history.

## Install

Install Firemacs from [addons.mozilla.org](https://addons.mozilla.org/firefox/addon/firemacs/).

## Keys

| Where | Keys |
|---|---|
| Text fields | `C-f` `C-b` `C-n` `C-p` `C-a` `C-e` `M-f` `M-b` `M-<` `M->`, `C-SPC` `C-w` `M-w` `C-k` `C-u` `C-y`, `C-d` `C-h` `M-d` `M-DEL`, `C-o`, `C-x u` |
| Elsewhere | `j`/`k` `C-n`/`C-p` (line), `u`/`b` (page), `M-<`/`M->` (top/bottom), `h`/`l` `C-b`/`C-f` (tab), `B`/`F`/`R` (back/forward/reload) |
| Both | `C-s`/`C-r` (incremental search), `C-x b` (switch tab), `C-v`/`M-v`, `C-g`, `C-x h`, `C-x k`, `C-M-u`/`C-M-t` (copy URL/title),…

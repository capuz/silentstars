---
repo: "mm--/dot-emacs"
name: "dot-emacs"
description: "My Emacs configuration files"
url: "https://github.com/mm--/dot-emacs"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
stars: 21
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2013-09-30T00:36:59Z"
lastCommitAt: "2026-06-25T01:31:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 37
maintainers: ["mm--"]
openGraphImageUrl: "https://opengraph.githubassets.com/e13fa0f291c495a2deceb34671d8c64bdbf0bc60e4615303c145da9da5d2fe83/mm--/dot-emacs"
---

# Josh's Emacs Config

Hey there! This repository contains my Emacs configuration file (see
[`jmm-emacs.org`](./jmm-emacs.org)). My org-mode configuration is located in [`jmm-org-config.org`](./jmm-org-config.org)

Most of the documentation is included in the Emacs configuration itself, it's much like Sacha Chua's Emacs configuration.

This repo is not probably all that portable, so it may not work on
your computer. It's mostly here so you can take the bits and pieces
you find useful.

Some things that may be useful
- `josh/helm-org-clock-in` uses helm to quickly clock into Org-mode tasks
- `josh/helm-org-jump` uses helm to quickly jump to an Org-mode entry
- `start-xterm` quickly launches a new terminal, even ssh-ing into
  other machines if you're using tramp. ~~(Sorry, I don't like using
  shell, eshell, or term)~~ Actually I'm kinda really starting to like
  `eshell` and I've used `ansi-term` through `shell-pop` for a while.
  - Some `eshell` utilities like:
	- Making `ls` items clickable (either inserting the filename directly into the prompt or visiting the file at point)
	- Quickly changing directories to frequently used ones using `fasd` and `ivy` (see…

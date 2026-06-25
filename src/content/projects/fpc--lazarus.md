---
repo: "fpc/Lazarus"
name: "Lazarus"
description: "Lazarus IDE ----- READ-ONLY Mirror of https://gitlab.com/freepascal.org/lazarus/lazarus"
url: "https://github.com/fpc/Lazarus"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [80]
stars: 182
forks: 34
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 63
recentReleases: 0
createdAt: "2021-07-28T13:12:53Z"
lastCommitAt: "2026-06-25T06:41:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["Felzomah", "wp-xyz", "kamischi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f9ae05aa0acef744df8c6d2235581c04797c1e4a202a662643c108892d20f6c/fpc/Lazarus"
---

Welcome to Lazarus
==================

Lazarus is a Rapid Application Development Tool for Free Pascal.
It comes with the LCL - Lazarus component library, which contains platform
independent visual components like buttons, windows, checkbox, treeview and
many, many more. The LCL is platform independent, so you can write an
application once and then compile for various platforms without changing code.

[Free Pascal](https://www.freepascal.org) is a fast Object Pascal compiler,
that runs on more than 20 platforms (Linux, Windows, BSD, OS/2, DOS, PowerPC,
and many more).

The LCL currently supports:
* Linux/FreeBSD (Gtk2, Gtk3, Qt4, Qt5, Qt6)
* all flavors of Windows (even WinCE)
* macOS (Cocoa, Carbon, Gtk2, Qt4, Qt5, Qt6)

The LCL still contains code for Gtk1 (although this target is obsolete).

### Compilation

You don't need ```./configure```, just do  
```make clean bigide``` (```gmake clean bigide``` in BSD).

This will create the Lazarus executable with a lot of packages.
Start it and enjoy.

If the above gives an error, you can try to build a minimal IDE with  
```make clean all``` (```gmake clean all``` in BSD).

### Installation and Requirements

See [Lazarus…

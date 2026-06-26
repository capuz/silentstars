---
repo: "gavinhungry/patches"
name: "patches"
description: "Patches for Arch Linux packages to fix things that annoy me"
url: "https://github.com/gavinhungry/patches"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2014-11-19T16:38:02Z"
lastCommitAt: "2026-06-26T21:31:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 63
maintainers: ["gavinhungry"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf5f45e7470876c8e312aea2f11d7cc9b44e02a71cde3a043fee7c0c48dfb037/gavinhungry/patches"
---

patches
=======
Patches for Arch Linux packages to fix things that annoy me

Usage
=====
    $ ./patch.sh 
    usage: patch.sh [OPTION]... PACKAGE [PACKAGE]...

      -d, --download          download packages before patching
      -D, --download-only     download packages without patching
      -H, --hard-update       rebuild patches by comparing against original packages
      -u, --unpatched         include unpatched installed packages
      -l, --list-unpatched    list unpatched installed packages and exit
      -L, --list-nonlocal     list packages without patches needing local build
      -h, --help              this message

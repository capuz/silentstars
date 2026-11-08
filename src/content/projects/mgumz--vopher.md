---
repo: "mgumz/vopher"
name: "vopher"
description: "vopher - acquire vim-plugins … fast."
readmeQualityOk: true
url: "https://github.com/mgumz/vopher"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["vim-plugins", "vim"]
stars: 74
forks: 4
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2015-01-04T12:17:46Z"
lastCommitAt: "2026-11-08T10:38:01Z"
lastReleaseAt: "2026-11-08T10:42:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 44
maintainers: ["mgumz"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2be751a1bc6038fe50b877a44e8bda544bb6c532e7d52f9ce96f43ea6a791ca/mgumz/vopher"
---

# VOPHER - Acquire (n)vim-plugins - fast

## Description

**vopher** is a standalone program to acquire plugins for vim/neovim. The user
provides a `vopher.list` files which contains references to the desired
plugins. Based upon that `vopher.list` file, file downloads the plugins and
unpacks them in the appropriate folder. **vopher** requires no 3rd party
programs to do its job.

**vopher** fetches and unpacks the 53 (yes.) plugins of its author in ~ 2
seconds.

## Usage

    Usage: vopher [flags] <action>

    Flags:
      -all
            also delete <plugin>.zip in -dir and archives in -cache not referenced in -f <list> [prune]
      -cache string
            directory to keep downloaded archives in; empty: keep them next to the plugins in -dir (default "$XDG_CACHE_HOME/vopher" or "~/.cache/vopher")
      -dir string
            directory to extract the plugins to (default "./pack/vopher/start")
      -dry
            dry-run, show what would happen [prune, clean]
      -f string
            path|url to list of plugins (default "vopher.list")
      -filter value
            operate on given plugins only; matches substrings, can be given multiple times
      -force…

---
repo: "henrylawson/dotbash"
name: "dotbash"
description: "Bash settings"
url: "https://github.com/henrylawson/dotbash"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [51, 49]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2013-07-24T02:26:31Z"
lastCommitAt: "2026-05-24T00:06:36Z"
status: "quiet"
tags: ["solo_builder", "legacy_hero"]
healthScore: 51
undervaluedScore: 42
maintainers: ["henrylawson"]
openGraphImageUrl: "https://opengraph.githubassets.com/bddbc169579b9715c3068b05b61a27478cf5f1b76fd0f0348822e6eacbbfec0a/henrylawson/dotbash"
---

# dotbash

## To get started
1. `echo MyMachineName > .hostname`
1. `curl -H 'Cache-Control: no-cache' https://raw.githubusercontent.com/henrylawson/dotbash/master/go > go && bash ./go`
1. Note, some steps are only run on certain hosts, check ./go for details

## Reconfigure all
`./bootstrap`

## tmux shortcuts
1. `tmux ls` view open sessions
1. `tmux attach -t <session name>` attach to session
1. `tmux kill-session -t <session name>` kill the session
1. `CTRL+B %` split vertical
1. `CTRL+B "` split horizontal
1. `CTRL+B <ARROW>` change pane
1. `CTRL+B z` toggle pane to full view
1. `CTRL+B c` new window
1. `CTRL+B <window number>` change window
1. `CTRL+B [` scroll mode
1. `CTRL+B ]` paste highlighted text
1. `CTRL+B d` detach from session
1. `CTRL+B :` change settings, such as `set synchronize-panes`

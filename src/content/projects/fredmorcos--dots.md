---
repo: "fredmorcos/dots"
name: "dots"
description: "dotfiles (configuration files and scripts)"
readmeQualityOk: true
url: "https://github.com/fredmorcos/dots"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [84]
topics: ["configuration", "scripts"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-10-27T09:42:02Z"
lastCommitAt: "2026-08-28T12:22:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 65
maintainers: ["fredmorcos"]
openGraphImageUrl: "https://opengraph.githubassets.com/f838382525b2bdc087ab87c3acba6460a6206d4b81cc40acbdb880c2013d37bb/fredmorcos/dots"
---

# dots
dotfiles (configuration files and scripts)

# Notes

* LUKS Performance Improvements (Enabled discards and disable WorkQueues)
- ~cryptsetup refresh --allow-discards --perf-no_read_workqueue --perf-no_write_workqueue --persistent root~
- ~cryptsetup refresh --allow-discards --perf-no_read_workqueue --perf-no_write_workqueue --persistent home~

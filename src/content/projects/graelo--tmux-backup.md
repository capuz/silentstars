---
repo: "graelo/tmux-backup"
name: "tmux-backup"
description: "A backup & restore solution for Tmux sessions"
url: "https://github.com/graelo/tmux-backup"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["tmux", "tmux-plugin"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-30T13:30:59Z"
lastCommitAt: "2026-06-26T21:30:33Z"
lastReleaseAt: "2022-12-10T14:19:00Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 66
maintainers: ["graelo", "graelo-ci-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/20dddb3af76197107319fbd2585e1e2a20f8fac44f3de65e9749d35b0b02d09e/graelo/tmux-backup"
---

# `tmux-backup`

A backup & restore solution for Tmux sessions.

Version requirement: _rustc 1.95+_

## Features

- Backup and restore of your tmux environment:
  - tmux sessions windows, panes, with layout, titles & pane history
  - current and last session.
- Fast: less than 1 sec for 16 sessions, 45 windows and 80 panes.
- Show the catalog of backups, with age, file size, content description &
  archive format
- 2 strategies are available:
  - keep the `n` most recent backups
  - classic backup strategy:
    - the lastest backup per hour for the past 24 hours (max 23 backups -
      exclude the past hour),
    - the lastest backup per day for the past 7 days (max 6 backups - exclude
      the past 24 hours),
    - the lastest backup per week of the past 4 weeks (max 3 backups - exclude
      the past week),
    - the lastest backup per month of this year (max 11 backups - exclude the
      past month).
- Because you decide where backups are stored, you can use both strategies,
  combining the benefits of high-frequency backups and on demand backups like
  in tmux-resurrect.

## Getting started

After installation (see below), you can either use it from the command line, or
via…

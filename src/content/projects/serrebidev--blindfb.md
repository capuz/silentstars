---
repo: "serrebidev/BlindFB"
name: "BlindFB"
description: "BlindFB: an accessible Facebook and Messenger client for screen reader users, built in Rust with wxDragon on the facebook-cli (fb) backend"
readmeQualityOk: true
url: "https://github.com/serrebidev/BlindFB"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 7
forks: 2
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-10-27T20:25:31Z"
lastCommitAt: "2026-11-07T09:30:29Z"
lastReleaseAt: "2026-10-28T23:45:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["serrebidev", "michaldziwisz", "math65"]
openGraphImageUrl: "https://opengraph.githubassets.com/31ed11413874dabca7ebb85d996bad74385d824b95d1430ac5c090d530c8be6c/serrebidev/BlindFB"
---

# BlindFB

A vibe-coded, screen-reader-friendly Facebook and Messenger client for Windows, macOS, and Linux, built for reading, posting and chatting without the web site.

**Questions, bugs, or release news?** Join the [SerrebiProjects Telegram group](https://t.me/SerrebiProjects), the fastest place to get help.

BlindFB is a front end for the [`fb` command-line tool](https://github.com/hieu-lee/facebook-cli), which drives a dedicated browser profile that stays logged in to your Facebook account. BlindFB runs `fb` for everything and presents its output in a keyboard-first window built on [wxDragon](https://github.com/trypsynth/wxDragon): native lists, menus and dialogs, the real platform widgets your screen reader already knows.

## Features

- News feed with refresh-ahead scrolling, and Feeds (most recent) on Ctrl+7, with each post's full text expanded in its row.
- A post reader on Enter: the full post, its comments and replies, and a comment box; the context menu replies to, likes and copies the exact comment.
- React with like, love, care, haha, wow, sad and angry, comment, and share through Facebook's own share dialog, which tells you the audience first and takes optional…

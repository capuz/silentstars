---
repo: "marciopaiva/runic-ssh"
name: "runic-ssh"
description: "A modern, fast, and secure cross-platform SSH/SFTP client built with Rust and Tauri."
readmeQualityOk: true
url: "https://github.com/marciopaiva/runic-ssh"
homepage: "https://marciopaiva.github.io/blog/runic-ssh-cliente-ssh-sftp-multiplataforma"
language: "TypeScript"
languages: ["TypeScript", "Rust", "HTML"]
languagePcts: [50, 28, 20]
topics: ["cross-platform", "desktop-app", "devops", "rust", "sftp", "ssh", "ssh-client", "tauri", "terminal"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 165
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-22T02:16:25Z"
lastCommitAt: "2026-11-25T03:16:25Z"
lastReleaseAt: "2026-09-13T21:37:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 61
maintainers: ["marciopaiva", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a5661bb6ad660d6b1b6bb2c0fc66d2c17e7c95f31966549ecca00bd25490deb/marciopaiva/runic-ssh"
fundingLinks: ["GITHUB:https://github.com/marciopaiva"]
---

## Why this exists

A sysadmin connects to a server fifty times a day, and the tools for it are
either twenty years old or expensive. The good parts of the expensive ones,
a pleasant session manager, SFTP beside the terminal, tunnels that aren't a
command-line flag, aren't hard problems. They're just behind a licence.

**Runic SSH puts those in something free, small enough to audit, and owned by
the people who use it.** Rust and Tauri 2.0, `russh` in process instead of an
OpenSSH binary, the OS keychain for secrets, and a decision record for every
architectural choice.

The name is the runic alphabets: symbols carved to write, remember, and cross
distances. A rune fits in the hand. So should the tool that carries your keys.

## What it looks like

The running application, connected to this project's own SSH fixtures. Not a
mockup, not the design canvas. Left to right, top to bottom: the Hall of a
Production Space, the Bar scoping two hosts to run a saved macro, two sessions
side by side, Monitor, SFTP, and a host's Logbook.

## What works today

Each line is a feature that ships; the record behind it is one click away.

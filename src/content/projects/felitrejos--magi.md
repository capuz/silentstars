---
repo: "felitrejos/magi"
name: "magi"
description: "Live monitoring for your machines and coding agents, in one Rex pane"
readmeQualityOk: true
url: "https://github.com/felitrejos/magi"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [68, 29]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-14T04:11:47Z"
lastCommitAt: "2026-11-17T12:20:17Z"
lastReleaseAt: "2026-11-16T16:58:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["felitrejos"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f175c67dca0c53c9c20689f5ae4d36bbd0119c0eeac9c358e0deb6173a11920/felitrejos/magi"
---

This repo holds two apps that work together or alone:

- **magi** shows every Claude Code and Codex session on your machines, and
  each machine's load, in one [Rex](https://www.superlogical.com/rex) pane.
  You still work in the agents themselves. magi puts each session in the
  right place and tells you when one needs you.
- **cielago** moves a Claude Code or Codex session to another machine, along
  with its conversation and uncommitted work. It also lets Claude send work
  to the machine that fits it, such as running your CI on the Linux machine
  that matches it before you push. It works on its own, from any Claude
  Code session, over SSH.

## magi

- **Every session, every machine.** magi is built to sit next to Rex's
  sidebar. What needs you is at the top. Below that, each machine has a row
  with its load, and its sessions are listed under it, one line each,
  saying what each is doing. It handles any number of machines and needs no
  server or config file.
- **Sessions in their place.** A new session opens on whichever machine has
  room. It goes in a Rex session named after its folder, in a tab for its
  repo. Each subagent gets its own tab beside it. That tab shows…

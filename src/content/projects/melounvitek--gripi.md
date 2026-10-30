---
repo: "melounvitek/gripi"
name: "gripi"
description: "Desktop and web portal for Pi harness, powered by a self-hosted gateway"
readmeQualityOk: true
url: "https://github.com/melounvitek/gripi"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [53, 42]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T22:09:58Z"
lastCommitAt: "2026-10-30T10:23:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 50
maintainers: ["melounvitek"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c99b1313b21eb7b74329e8768123be8be4ddf05ae9586030bc9a5400753d004/melounvitek/gripi"
---

**Gripi is a desktop and web interface for [Pi](https://pi.dev/), served by a self-hosted gateway.** Run the gateway on a development machine or home server with Pi CLI installed, then use Pi from the desktop app or a web browser, on the same machine or over an encrypted private network.

**Pi stays Pi.** Gripi does not alter Pi’s system prompt, patch Pi, install extensions, rewrite sessions, or change Pi-owned configuration. It works with the Pi setup you already have. The only addition is a small Gripi extension, loaded into each Pi process with `--extension`, that gives the browser access to Pi’s session tree.

> The project is a fully vibe-coded alpha version at the moment. Initially, it was supposed to be a quick proof of concept, but I ended up using it for my daily work and I actually like it. So please, feel free to try it; but expect some rough edges, missing features, and behavior that may change. Happy to look at any feedback (use GitHub issues)!

## Features

- All Pi sessions on the gateway machine in one sidebar, with search, project and tag filters, pinning, and unread markers.
- A Pi-style composer with slash commands, `@` file completion, `!` shell commands, and…

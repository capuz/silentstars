---
repo: "gamemann/nightly"
name: "nightly"
description: "Web panel for scheduling and running Claude Code agents on game and web dev projects. Queue tasks, run them on a timer, let agents share a board so they don't step on each other, and review their screenshots, animations and models in the browser."
readmeQualityOk: true
url: "https://github.com/gamemann/nightly"
homepage: "https://cdeacon.net"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [46, 44]
topics: ["claude", "claude-agent", "claude-ai", "claude-code", "claude-runner", "claude-usage", "next", "nextjs", "tailwind", "tailwind-css"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-07T05:49:44Z"
lastCommitAt: "2026-11-23T10:24:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["gamemann"]
openGraphImageUrl: "https://opengraph.githubassets.com/f20ab4b3b8a63b25116beb12bd3dbae23f3b1c2f69fa420ade6a7e31790f815a/gamemann/nightly"
---

This started out as a small project I had [Claude Code](https://claude.com/product/claude-code) create for my internal development with my gaming and modding project, [**GameSpice**](https://gamespice.net).

Initially, one simple cron job ran *every night* to manage tasks and track the progress of Claude Code agents and workers. Over time, I've been adding more and more features to the project. Given these additions, I've been impressed with how much functionality has been getting integrated into the project and I decided I'd make it open source so that others can benefit from it if they want to use it for their development.

Companion repo: the scripts, systemd units, offload helpers and agent instruction files that run my own fleet on top of nightly are public in [nightly-env](https://github.com/gamemann/nightly-env).

---
repo: "metalmatze/kelpie"
name: "kelpie"
description: "A watchdog for your coding agents."
readmeQualityOk: true
url: "https://github.com/metalmatze/kelpie"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-10-30T10:10:07Z"
lastCommitAt: "2026-11-23T13:32:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["metalmatze", "thiemok", "bwplotka"]
openGraphImageUrl: "https://opengraph.githubassets.com/98f1ecd0a07c1d26fab7f1d776a37e06a8e0d26043da47bb246743da7b207d51/metalmatze/kelpie"
---

# kelpie

*A watchdog for your coding agents.*

**Stop telling your coding agents what happened while they were idle.** kelpie watches anything you point it at, such as pull requests, CI runs, Linear issues, or a deploy, and types each update into the terminal of the agent that owns the work, so you don't have to do it by hand any longer.

- **Any agent.** Claude Code, Codex, or any other coding agent in [herdr](https://herdr.dev) (the terminal UI or herdr GPUI), [Orca](https://github.com/metalmatze/kelpie/blob/HEAD/docs/hosts.md#orca), or an [external host](https://github.com/metalmatze/kelpie/blob/HEAD/docs/hosts.md#external-hosts). kelpie delivers through the host, so the agent needs no plugin or MCP server to receive updates.
- **Anything you want watched.** GitHub and Linear today, Kubernetes next. Each integration is a small provider, and a source is a command plus a jq mapping in YAML, so you can add your own.

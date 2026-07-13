---
repo: "mindroom-ai/mindroom"
name: "mindroom"
description: "Your AI is trapped in apps. We set it free."
readmeQualityOk: true
url: "https://github.com/mindroom-ai/mindroom"
homepage: "https://docs.mindroom.chat"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 190
forks: 6
openIssues: 19
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-19T23:06:18Z"
lastCommitAt: "2026-07-13T06:38:14Z"
lastReleaseAt: "2026-02-06T21:02:59Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 91
undervaluedScore: 27
maintainers: ["basnijholt", "mindroom-release-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137843985/ac58bdfd-8661-4452-87f7-53dada5d1078"
---

# mindroom

**AI agents that live in your chat rooms.**

MindRoom is an open-source multi-agent runtime built on [Matrix](https://matrix.org/) that works with nearly any [cloud or local AI model](https://github.com/mindroom-ai/mindroom/blob/HEAD/docs/configuration/models.md).
You define agents in a YAML file or in the web dashboard; MindRoom gives each one a Matrix account, and you talk to them in threads in [MindRoom Chat](https://github.com/mindroom-ai/mindroom-chat) — or any other Matrix client you already use.
Because Matrix bridges to other platforms, the same agents also work in Slack, Telegram, Discord, WhatsApp, IRC, and email — with the same persistent memory everywhere.
Self-host the whole stack, or run only the MindRoom backend locally and pair it with hosted Matrix at [mindroom.chat](https://mindroom.chat).

https://github.com/user-attachments/assets/1f121c89-5418-4f42-bdfe-fb9de0fecd03

## Features

- **Multi-agent orchestration** — define specialist agents and teams in `config.yaml`; a built-in router picks the responder when you don't @-mention one, and mentioning several agents makes them collaborate in a thread.
- **Persistent memory** — agents remember people,…

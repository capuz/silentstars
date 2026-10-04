---
repo: "brsbl/bb-plugins"
name: "bb-plugins"
description: "Personal bb plugins and reusable plugin-development tooling"
readmeQualityOk: true
url: "https://github.com/brsbl/bb-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-07-20T09:31:47Z"
lastCommitAt: "2026-10-04T10:01:41Z"
lastReleaseAt: "2026-09-16T20:11:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 40
maintainers: ["brsbl"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd43f1c168549e30dffc0067430c9c9ee1468ef887157b007bc6f674e418abcb/brsbl/bb-plugins"
---

# bb plugins

Fourteen bb plugins I use for product design work, kept together with the few build and repository tools they share. [](https://github.com/brsbl/bb-plugins/actions/workflows/ci.yml)

[bb](https://getbb.app) is an agentic IDE for running coding agents across projects, threads, and environments. Its plugins can add UI, commands, skills, and server capabilities; this repository is where I build and maintain mine.

## Plugins

Each plugin has its own workspace under `plugins/` and a short README with the story behind it.

### Design Doctrine

Turns recurring product-design feedback into a searchable rule library that agents can apply while designing, building, and critiquing. Its maintenance workflow keeps the rules grounded in real review evidence.

[Source](https://github.com/brsbl/bb-plugins/blob/HEAD/plugins/design-doctrine) · [README](https://github.com/brsbl/bb-plugins/blob/HEAD/plugins/design-doctrine/README.md)

Install: `bb plugin install git:https://github.com/brsbl/bb-plugins.git@plugin/design-doctrine --yes`

### GitHub Activity

Brings incoming comments and mentions from GitHub pull requests and issues you authored into one searchable, filterable triage…

---
repo: "overment/limen"
name: "limen"
description: "A minimal one-human-many-agents harness built from files, git, and one CLI."
readmeQualityOk: true
url: "https://github.com/overment/limen"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [55, 39]
stars: 142
forks: 14
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T06:24:37Z"
lastCommitAt: "2026-10-04T09:58:29Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 26
maintainers: ["iceener"]
openGraphImageUrl: "https://opengraph.githubassets.com/320bdc42e831dac03f863d3cb4fbd2f02fb3df23d06522036ba5d8790919a316/overment/limen"
---

# Limen

> **[Explore the full workflow → Towards Autonomous Product Development](https://mega.dev/autonomous-product-development)**
>
> This MEGA Drop explains the workflow behind Limen. It includes a live video walkthrough with Pi, Herdr, and Grok Bot. [MEGA.dev](https://mega.dev) shares practical articles, repos, and tools for work with AI.

You describe a task to an agent in Pi or Herdr.
The agent uses Limen to plan work, start workers, and request review.
Jobs run in separate Git worktrees and keep their task, branch, log, state, and session.
You review the results and approve merges.

Experimental software. Commands, prompts, and project files can change.

## Requirements

- macOS or Linux, with Node.js 24 or later and Git.
- [Pi](https://pi.dev) or OMP, installed and authenticated.
- Herdr is optional for interactive job tabs.

See the [setup guide](https://github.com/overment/limen/blob/HEAD/docs/setup.md) for engine and Herdr configuration.

## Start

Install Limen once:

```bash
git clone https://github.com/overment/limen.git
cd limen
npm install
npm link
```

In your project’s Git repository, run:

```bash
cd /path/to/your-project
limen init
```

Open Pi (`pi`) in that…

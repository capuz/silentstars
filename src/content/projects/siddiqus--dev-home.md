---
repo: "siddiqus/dev-home"
name: "dev-home"
description: "A work homepage for devs"
readmeQualityOk: true
url: "https://github.com/siddiqus/dev-home"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 16
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-05T20:26:11Z"
lastCommitAt: "2026-10-12T11:15:22Z"
lastReleaseAt: "2026-04-25T07:07:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["optisiddiqus"]
openGraphImageUrl: "https://opengraph.githubassets.com/c154e5210b88f8d3ffd74fa6840787c9d684a932910f3da8997915b3a4797bd4/siddiqus/dev-home"
---

# Dev Home

**Live app: [app.devhome.fyi](https://app.devhome.fyi/)**

A developer dashboard that brings your Jira issues and GitHub pull requests into one place, with planning tools for your workday.

## What is Dev Home?

Dev Home is a static web app (React + Vite) that helps you stay on top of your work across Jira and GitHub. Open [app.devhome.fyi](https://app.devhome.fyi/), add your tokens in **Settings**, and you're set. There's nothing to install and no account to create.

- **Your work**: Jira issues, your open PRs, review requests and mentions on both platforms
- **Your day**: a Workday view with Focus and Standup modes, built from your sprint, PRs and reviews
- **Your team**: team PR velocity, burn-up charts and workload
- **Personal tools**: notes with reminders, a Kanban board and a Pomodoro timer

Your data stays in your browser's localStorage. GitHub is called directly from the browser. Jira requests go through a small stateless passthrough proxy (`/jira-proxy`), because Jira Cloud blocks cross-origin requests. Credentials are never stored on the server.

## Features

**Home**

- **Summary**: at-a-glance view of your open work, mentions and top priorities
-…

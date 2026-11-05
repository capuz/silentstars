---
repo: "openagt/openagent"
name: "openagent"
description: "Autonomous AI programming. Stop babysitting your coding agents. You make the important decisions; AI does the rest."
readmeQualityOk: true
url: "https://github.com/openagt/openagent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 1
openIssues: 15
closedIssues: 759
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-25T15:51:24Z"
lastCommitAt: "2026-11-05T00:22:10Z"
lastReleaseAt: "2026-06-27T09:03:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["suleimansh", "brillout"]
openGraphImageUrl: "https://opengraph.githubassets.com/928382db3b64c6be440e48d041703ea47985a0bec28a82b10dfca819e1026427/openagt/openagent"
discussionCount: 12
---

### OpenAgent

**Autonomous AI programming.**  
Stop babysitting your coding agents. Make the important decisions, let AI do the rest.

## What is this?

> We're building an agent orchestration tool that is not only fully open source, but also fully modular which is the unique thing about what we're building: the orchestration is merely a set of skills you can choose and switch out individually. So basically replacing tools like Cursor/Conductor/Traycer with just a set of skills. Our hope is that the entire AI harness eventually becomes open source and modular.

## Quickstart

In your project's folder:

```bash
npx @openagt/dashboard
```

It opens the dashboard in your browser, on your project. Every agent you start gets the default skills (logs, question, github on a GitHub project, orchestration, tickets and queue), with nothing written in your project; a skill of your own with the same name takes one's place.

To give the project more skills, as files of its own, tick them on the dashboard's Skills page, which the Skills button under the message box opens. Or pick them with [`skills`](https://github.com/vercel-labs/skills), for any agent:

```bash
npx skills add…

---
repo: "pmndrs/pine"
name: "pine"
description: "a reactive harness for agents"
readmeQualityOk: true
url: "https://github.com/pmndrs/pine"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 172
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 36
recentReleases: 10
createdAt: "2026-11-10T23:18:48Z"
lastCommitAt: "2026-11-13T18:29:32Z"
lastReleaseAt: "2026-11-11T17:04:58Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 29
maintainers: ["drcmda"]
openGraphImageUrl: "https://opengraph.githubassets.com/93fe49d7e5d5379cc859aa8f8edd409fee57ac0992919fdeb9d5999d64694a78/pmndrs/pine"
---

```bash
npm install -g @pmndrs/pine
```

### PINE makes AI reactive

Most harnesses just do input chat: "Do this do that". And maybe a scheduler: "Do it tomorrow". In PINE agents react to any stimuli. From watching folders, commands, websites, ftp endpoints, webhooks, to any other event source. You can hook them up and let them react to and operate your physical devices in the house, or digital assets.

PINE of course also handles regular chat, coding, tasks and orchestration. Agents carry memory and so on. All the basic stuff is in there, too.

### Some design choices

- **Event-driven architecture:** Agents subscribe to events and react. An event source is just a `*.ts` service with a schema. Tell the agent what you want and they subscribe: "Watch ~/documents/scans, for every new file: extract summaries and payment details, if present"
- **No configs:** Tell the main agent what you want. It configures PINE, creates agents, MCPs, event sources, skills and schedules through administrative tool calls, never touches user config, never messes it up or breaks it.
- **Self-discovery:** A built-in BM25 manual tool lets agents look up any API or internal detail on demand, without…

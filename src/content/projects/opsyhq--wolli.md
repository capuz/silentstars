---
repo: "opsyhq/wolli"
name: "wolli"
description: "What is my purpose?"
url: "https://github.com/opsyhq/wolli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T12:45:52Z"
lastCommitAt: "2026-07-03T12:39:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["saba-ch", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1268360663/fba6bd21-7f05-44d4-b67c-f5e0401e10e8"
---

# Wolli

**Create agents that grow around a purpose.**

[Install](#install) · [How it works](#how-it-works) · [Roadmap](ROADMAP.md)

</div>

---

> **What is my purpose?**

Wolli lets you create agents that grow around a purpose. Each agent remembers across sessions, runs on schedules, reacts to events, and extends itself over time by writing the skills, integrations, and workflows it needs to do its job better.

## Install

```sh
npm install -g wolli
wolli
```

The first run sets up your provider and creates your first agent. A new agent
opens by interviewing you to work out its purpose, then writes its own
`SOUL.md` — its first line becomes the agent's description everywhere. Agents
and state live under `~/.wolli`.

```
 Agents

 → inbox    Triage my email each morning, draft replies to the routine ones, flag what needs me.
   scout    Watch the repos and deps we ship; when a release or CVE needs action, open an issue and ping me.
   ledger   Track project spend across providers, reconcile invoices weekly, warn me before a budget tips over.

 ↑/↓ browse · enter chat · tab details · type to search commands · ctrl+c quit
```

## How it works

- **Purpose-built.** The agent works…

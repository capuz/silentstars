---
repo: "nornscode/norns"
name: "norns"
description: "Durable execution for AI agents"
readmeQualityOk: true
url: "https://github.com/nornscode/norns"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [94]
stars: 11
forks: 2
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-20T02:20:48Z"
lastCommitAt: "2026-08-11T04:47:57Z"
lastReleaseAt: "2026-08-08T19:07:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 41
maintainers: ["amackera"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1186805708/d042538a-7891-40d8-840d-b5125715ff4f"
---

</p>

<h1 align="center">Norns</h1>

</p>

https://github.com/user-attachments/assets/b300b164-dc0c-44ea-a794-1de00b4f01a7

Norns is an open-source durable runtime for AI agents, built in Elixir on the BEAM. If a worker crashes mid-run, the next worker picks up where it left off. Every step is persisted to an event log. Completed tools don't re-execute. Norns never touches your API keys or data.

## Get started

```bash
brew install nornscode/tap/nornsctl
nornsctl dev
nornsctl new my-agent
cd my-agent
uv sync
uv run my-agent-worker
```

That's it. You have a running Norns server and a connected agent worker. See the [hello example](https://github.com/nornscode/norns-hello-agent) for a full walkthrough.

## The problem

If you run agents locally, durability is a solved problem. Modern operating and file systems and solid state drives are very reliable. Your machine stays on, the process stays alive, and the conversation transcript is right there. Cloud infrastructure is a little different. It's ephemeral, temporary. Containers get evicted. VMs get preempted. Deploys ship new code and kill in-flight processes. An agent's environment can disappear at any moment, and there's no…

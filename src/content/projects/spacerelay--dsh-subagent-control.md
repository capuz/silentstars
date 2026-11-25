---
repo: "SpaceRelay/dsh-subagent-control"
name: "dsh-subagent-control"
description: "Three DSH tools that let any agent — including a team member — list, steer and stop the subagents it started."
originalDescription: "Three DSH tools that let any agent — including a team member — list, steer and stop the subagents it started."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SpaceRelay/dsh-subagent-control"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek-harness", "deepseek-harness-desktop", "deepseek-harness-plugin", "deepseek-harness-plugins", "dsh", "dsh-desktop", "dsh-plugin", "dsh-plugin-desktop", "dsh-plugin-market", "dsh-plugins"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-25T13:41:05Z"
lastCommitAt: "2026-11-25T03:15:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["SpaceRelay", "deepseekmaid"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c199dbecb0d6a5b95188c669700a705e773cb85e278e415eebc9b3145171588/SpaceRelay/dsh-subagent-control"
---

# dsh-subagent-control

**Lets any agent, including team members, list, follow up with, and stop the subagents it has spawned.**

`list_subagents` · `send_subagent_message` · `interrupt_subagent`

> [English](https://github.com/SpaceRelay/dsh-subagent-control/blob/HEAD/README.en.md) | 中文

This repository contains five packages, and each one must be installed separately. The one you are looking at is the first: a subagent management tool for agents. The other four are listed under 「相关插件」(Related Plugins) below.

In DSH, an agent can hand part of its work to another agent. The agent that was handed the work is called a 「子代理」(subagent). This plugin lets the dispatching agent see its subagents, send them additional messages, and stop them.

## When it's useful

- You dispatched several subagents to work in parallel and want to know which are still running and how far they have got
- You want to add a message to a subagent that is currently working
- You want to stop one that has gone off track
- A subagent dispatched by a team member should also be controllable from above

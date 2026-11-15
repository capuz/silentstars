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
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-25T13:41:05Z"
lastCommitAt: "2026-11-15T08:28:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["SpaceRelay", "deepseekmaid"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce9528e304682cf612b7da08d4c3e34575d7800d75019503a97c76f350bf19a8/SpaceRelay/dsh-subagent-control"
---

# dsh-subagent-control

**Lets any agent — including team members — list, follow up on, and interrupt the subagents it has spawned.**

`list_subagents` · `send_subagent_message` · `interrupt_subagent`

> [English](https://github.com/SpaceRelay/dsh-subagent-control/blob/HEAD/README.en.md) | Chinese

## When to use it

- You spawned several subagents to work in parallel and want to know which are still running and how far they've gotten
- You want to add a note to a subagent that's currently running
- You want to stop one that's going off track and reclaim its turn
- In a team, sub-subagents spawned by the team lead should also stay under control from the top down

## The three tools

| Tool | What it does | Parameters |
| --- | --- | --- |
| `list_subagents` | Lists the subagents you spawned | `scope`: `children` (default, direct subagents) / `descendants` (entire subtree); `include_teammates`: defaults to `true` |
| `send_subagent_message` | Sends a message to a direct subagent | `subagent_id`, `message` |
| `interrupt_subagent` | Stops a subagent's current turn | `subagent_id` |

It looks like this:

```
list_subagents
→ 3b0f9c1e  running  "review the patch"  depth=1…

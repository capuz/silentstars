---
repo: "crewlet/crewlet"
name: "crewlet"
description: "Bring AI agents to life"
readmeQualityOk: true
url: "https://github.com/crewlet/crewlet"
homepage: "https://crewlet.com"
language: "Go"
languages: ["Go"]
languagePcts: [81]
stars: 9
forks: 0
openIssues: 247
closedIssues: 140
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-08-11T21:33:54Z"
lastCommitAt: "2026-11-22T11:39:51Z"
lastReleaseAt: "2026-08-11T22:28:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["clwluvw", "pinotelio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bff30f5ad48a190c23cddec2823d621a032de69b0d4c0797c0c57aa5d34e5dac/crewlet/crewlet"
discussionCount: 0
---

# Crewlet

**Run an AI agent company.**

Crewlet is an open-source Go engine for orchestrating hierarchically organized
AI agent companies. You describe a company in YAML — mission, org chart, roles,
policies, integrations — and Crewlet runs it: one persistent agent per seat,
planning and executing real work in chat, your issue tracker, and your code host,
learning from what it did, and escalating to the humans in the org chart when stuck.

---

## The org chart is the execution graph

Identity, delegation, communication and knowledge are scoped by a seat's place in the hierarchy. The chart you draw is the graph the engine runs.

---

## How a turn works

A trigger (a chat message, a work-item webhook, a schedule) wakes exactly one agent, which runs a two-stage turn:

```mermaid
flowchart LR
    T["Trigger<br/><i>chat · work item · schedule</i>"] --> E
    E["<b>Execute</b><br/>one loop: discover tools,<br/>act, then say what it did"] --> R["<b>Review</b><br/>judge the record:<br/>what actually ran"]
    R -->|done| S["Work shipped:<br/>comments, MRs, docs"]
    R -->|self_iterate| E
```

---
repo: "ObneyAI/orc"
name: "orc"
description: "Short for Orchestrator"
readmeQualityOk: true
url: "https://github.com/ObneyAI/orc"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-10T18:57:31Z"
lastCommitAt: "2026-08-05T06:07:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["Daryldactyl", "cjbarre"]
openGraphImageUrl: "https://opengraph.githubassets.com/02c24209d66cf76c41ada48b4b99decb826631dc0c34cb2218e5fa027b4c328b/ObneyAI/orc"
---

# ORC

**Orchestrator** — a behavior-tree workflow execution engine built on [Grain](https://github.com/ObneyAI/grain).

ORC provides composable primitives for building, executing, optimizing, and evaluating LLM-powered workflows. It's designed as a library that consumers pull in as a git dependency.

Behavior trees have run game NPCs and robots for decades. The tree ticks **top-down, root first**; every leaf **reads** the blackboard (sensor / world state) and **writes** an action or command — and whole behaviors *stack* as reusable subbehaviors (here a **Swing-Sword** tree nests inside **Combat**, which sits under the **brain**):

```mermaid
flowchart TB
  brain["<b>NPC brain</b><br/>FALLBACK · highest priority that works"]:::fb
  brain --> ALERT
  brain --> COMBAT
  brain --> patrol["<b>patrol</b><br/>ACTION leaf<br/><i>idle behaviour</i><hr/>▸ reads&nbsp;&nbsp;waypoints<br/>◂ writes&nbsp;&nbsp;move_cmd"]:::act
  subgraph ALERT["🔍 Alert subbehavior"]
    direction TB
    a["<b>investigate</b><br/>SEQUENCE"]:::seq
    a --> heard(["<b>heard a noise?</b><br/>CONDITION<hr/>▸ reads&nbsp;&nbsp;hearing"]):::cond
    a --> goto["<b>move to noise</b><br/>ACTION leaf<hr/>▸…

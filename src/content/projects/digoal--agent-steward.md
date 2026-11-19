---
repo: "digoal/agent-steward"
name: "agent-steward"
description: "Host environment steward: resides on the Agent host machine and manages memory, materials, the software environment, and everything else."
originalDescription: "宿主环境大管家：驻留在 Agent 宿主机中，管记忆、管素材、管软件环境、管一切。 "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/digoal/agent-steward"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-15T03:37:58Z"
lastCommitAt: "2026-11-19T05:05:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["digoal"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ffcb05c6a6f6df8b8fa12e154af2fbbc922902ff159dbf307f28113e689bc2c/digoal/agent-steward"
---

# Agent Host Steward (Host Environment Steward)

> **Tripartite architecture: a host-machine fact graph as the core moat · user preference conventions as the collaboration guideline · an open, pluggable memory module with a mature ecosystem**  
> A lightweight system-cognition foundation that resides on the Agent host machine (Rust Edition · single-binary delivery).

---

## What is Agent Host Steward?
[Presentation deck](https://htmlpreview.github.io/?https://github.com/digoal/agent-steward/blob/main/steward-deck.html)  
  
[Roadshow deck](https://htmlpreview.github.io/?https://github.com/digoal/agent-steward/blob/main/presentation.html)  
  
There are many open-source projects focused on "cross-session memory" or "conversation summarization," but they do not address a deeper and more fatal pain point: **when an Agent works on a Linux host, it is completely in the dark about the physical world**:
- It doesn't know that `pdftotext` is already installed on the machine, and repeatedly struggles with pip-installing third-party libraries and getting errors;
- It doesn't know that port 8080 is already occupied by a production process, so binding to it directly crashes;
- It doesn't…
